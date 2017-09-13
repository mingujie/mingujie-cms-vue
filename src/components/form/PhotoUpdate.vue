<template>
  <el-tabs v-model="tabsConfig.activeName" class="photo-tabs" @tab-click="tabHandleClick">
    <el-tab-pane label="正文图片" name="contentUpdate" v-if="tabsConfig.isContentUpdate">
      <div class="photo-upload-img">
        <div class="content-img">
          <div class="img-item"  v-if="contentPhoto.length" v-for="(item, index) in form.galleryItem" :data-key="index" @click="setSelectedCover(index, item)">
            <img :src="item.gallery" />
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
          <div class="img-item"  v-if="photoLibrary.data.length" v-for="(item, index) in photoLibrary.data" :data-key="index" @click="onSelectedPhotoLibrary(index, item)">
            <img :src="item.url" />
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
      tabActiveName: ''
    }
  },
  props: {
    tabsConfig: {
      default: function(){
        return {
          activeName: 'localUpdate',
          isContentUpdate: false
        }
      },
      type: Object
    },
    contentPhoto: {
      default: function(){
        return []
      },
      type: Array
    },
    photoLibrary: {
      default: function(){
        return {
          data: [{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '王小虎'
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '张二吗'
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '王小虎'
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '张二吗'
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '王小虎'
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '张二吗'
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
    
  },
  methods: {
    /**
     * onSelectedPhotoLibrary 跟新已选择图片数据
     * @param  { Number } index   当前选择的下标
     * @param  { Object } curItem 当前选择的对象
     * @return {[type]}         [description]
     */
    onSelectedPhotoLibrary (index, curItem){
      this.selectedPhotoLibrary.push(curItem)
      console.log(this.selectedPhotoLibrary)
    },
    /**
     * updatePhotoSuccess 上传图片成功后调用
     * @param  { Object } response 接口返回信息
     * @param  { Object } file     图片文件信息
     * @param  { Object } fileList 多个图片文件信息
     * @return {[type]}          [description]
     */
    updatePhotoSuccess (response, file, fileList){
      let img = this.formartImg(file)
      this.selectedPhotoLocal.push(img)
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
    formartGallery (data){
      var img = {} 
      img.gallery = data.url;
      img.textarea = data.name;
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
