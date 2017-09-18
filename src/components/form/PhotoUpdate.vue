<template>
  <el-tabs v-model="updateConfig.activeName" class="photo-tabs" @tab-click="tabHandleClick">
    <el-tab-pane label="正文图片" name="singleUpdate" v-if="updateConfig.contentPicture">
      <div class="photo-upload-img">
        <div class="content-img">
          <div class="img-item"  v-if="contentPhoto.length" v-for="(item, index) in contentPhoto" :data-key="index" @click="onSelectedPhoto(index, item)">
            <img :src="item.url" />
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="上传图片" name="localUpdate">
      <div class="photo-upload-img">
        <div class="image-list" v-if="selectedPhotoLocal.length">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :file-list="selectedPhotoLocal">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div class="img-placeholder" v-else-if="updateConfig.from == 'singleUpdate' ">
          <el-upload
            class="img-upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="updatePhotoSuccess"
            :show-file-list="false"
            :file-list="selectedPhotoLocal">
            <el-button size="small" type="primary">点击选择图片</el-button>
            <div slot="tip" class="img-upload-tip">支持绝大多数图片格式，单张图片最大支持5MB</div>
          </el-upload>
        </div>
        <div class="img-placeholder" v-else>
          <el-upload
            class="img-upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="updatePhotoSuccess"
            :show-file-list="false"
            multiple
            :file-list="selectedPhotoLocal">
            <el-button size="small" type="primary">点击选择图片</el-button>
            <div slot="tip" class="img-upload-tip">支持绝大多数图片格式，单张图片最大支持5MB</div>
          </el-upload>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="素材库" name="onlineUpdate">
      <div class="photo-upload-img">
        <div class="img-placeholder"  v-if="!photoLibrary.data.length">
            <div slot="tip" class="img-upload-tip">你可以在上传图片的时候选择添加到素材库喔！</div>
        </div>
        <div v-else>
          <div class="img-item"  v-if="photoLibrary.data.length" v-for="(item, index) in photoLibrary.data" :data-key="index" @click="onSelectedPhoto(index, item, $event)" :class="{'active':item.checked}">
            <img :src="item.url" />
            <label class="img-selected"><i class="el-icon-upload-success el-icon-check"></i></label>
          </div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'dialogCover',
  components: {  },
  data () {
    return {
      photoItem: [],
      selectedPhotoLocal: [],
      selectedPhotoLibrary: [],
      tabActiveName: '',
      selectedPhotoIndex: ''
    }
  },
  props: {
    updateConfig: {
      type: Object
    },
    dialogVisible: {
      type: Boolean
    },
    contentPhoto: {
      type: Array
    },
    photoLibrary: {
      default: function(){
        return {
          data: [{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '1',
          active: false
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '2',
          active: false
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '3',
          active: false
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '4',
          active: false
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '5',
          active: false
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '6',
          active: false
        }],
          page: 1,
          size: 10,
          total: ''
        }
      },
      type: Object
    }
  },
  computed: {

  },  
  created (){
    console.log(this.updateConfig)
  },
  methods: {
    /**
     * onSelectedCover 更新封面图片
     * @param  { Number } index 当前所选图片下标
     * @param  { Object } item  当前所选图片对象
     * @return {[type]}       [description]
     */
    onSelectedCover (item, data){
      let _this = this;
      _this.$emit('updateCover', item, false);
      _this.$set(_this.selectedPhotoLocal, []);
    },
    /**
     * onSelectedPhoto 更新已选择图片数据
     * @param  { Number } index   当前选择的下标
     * @param  { Object } curItem 当前选择的对象
     * @return {[type]}         [description]
     */
    onSelectedPhoto (index, curItem){
      let _this = this, 
          from = _this.updateConfig.from

          console.log(from)
      if(from === 'singleUpdate') {

        this.onSelectedCover(curItem)

      }else{

        if(typeof curItem.checked == 'undefined' ) {
          _this.$set(curItem, 'checked', true);
          _this.selectedPhotoLibrary.push(curItem)

        }else {
          curItem.checked = !curItem.checked;
          if(curItem.checked) {
            _this.selectedPhotoLibrary.push(curItem)
          }else {
            _this.selectedPhotoLibrary.splice(index, 1)
            
          }
        }
      }
    },
    /**
     * updatePhotoSuccess 上传图片成功后调用
     * @param  { Object } response 接口返回信息
     * @param  { Object } file     图片文件信息
     * @param  { Object } fileList 多个图片文件信息
     * @return {[type]}          [description]
     */
    updatePhotoSuccess (response, file, fileList){
      let imgItem = this.formartImg(file)
      this.onSelectedCover(imgItem, this.selectedPhotoLocal)
      this.selectedPhotoLocal.push(imgItem)

      // if(this.updateConfig.from === 'singleUpdate' && this.selectedPhotoLocal.length) {

      // }
    },
    /**
     * formartImg 格式化图片
     * @param  { Object } data 图片文件信息
     * @return {[type]}      [description]
     */
    formartImg (data){
      var img = {}
      img.name = data.name
      img.url = data.url
      return img
    },
    /**
     * tabHandleClick tab切换
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    tabHandleClick (item){
      this.tabActiveName = item.name;
      this.clearSelectedPhoto(item.name)
    },
    /**
     * clearSelectedPhoto 清楚不是当前激活TAB的内容
     * @param  { String } activeName tab名称
     * @return {[type]}            [description]
     */
    clearSelectedPhoto (activeName){
      if(activeName === 'localUpdate') {
        this.selectedPhotoLocal = []
      }else if(activeName === 'onlineUpdate') {
        this.selectedPhotoLibrary = []
      }
    }
  }
}
</script>

<style lang="scss">
.photo-tabs {
  .el-tabs__nav {
    .el-tabs__item {
      font-size: 16px !important;
    } 
  }
}
.photo-upload-img {
    height: 420px;
    width: 100%;
    position: relative;
    color: #222;
  .el-upload-list__item-preview {
    display: none !important;
  }
  .el-upload--picture-card {
    border-width: 2px;
  }
  .img-item {
    width: 142px;
    height: 120px;
    position: relative;
    display: inline-block;
    border: 1px solid #e8e8e8;
    margin-right: 10px;
    cursor: pointer;
    overflow: hidden;
    .img-selected {
      position: absolute;
      display: none;
      right: -15px;
      top: -6px;
      width: 40px;
      height: 24px;
      background: #13ce66;
      text-align: center;
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      box-shadow: 0 0 1pc 1px rgba(0,0,0,.2);
      .el-icon-upload-success {
        color: #fff;
        font-size: 12px;
        margin-top: 11px;
        -ms-transform: rotate(-45deg) scale(.8);
        transform: rotate(-45deg) scale(.8);
      }
    }
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }
  .img-item.active {
    .img-selected {
      display: block;
    }
  }
  .image-list {
    height: 450px;
    width: 100%;
    list-style: none;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    .image-item {
      text-align: center;
      overflow: hidden;
      position: relative;
      float: left;
      font-size: 12px;
      width: 110px;
      height: 110px;
      margin: 17px 0 0 17px;
      z-index: 9999;
    }
  }
  .img-placeholder {
      height: 322px;
      padding-top: 150px;
      text-align: center;
      background: url('../../assets/update_photo.png') center 70px no-repeat;
      color: #999;
      font-size: 18px;
    }
    .img-upload-tip {
      font-size: 14px;
      margin-top: -5px;
    }
  .img-upload {
    button {
      display: inline-block;
      overflow: hidden;
      position: relative;
      padding: 0 30px;
      margin: 0 auto 20px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      line-height: 44px;
      color: #fff;
      cursor: pointer;
      -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
      -moz-box-shadow: 0 1px 1px rgba(0,0,0,.1);
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
      font-size: 14px;
    }
  }
}
</style>
