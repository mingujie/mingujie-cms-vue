<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>新建图集</strong> <small></small>
          </div>
          <div class="card-block">
            <el-form ref="form" :model="form" label-width="80px" id="form">
              <div class="form-group row">
                <div class="col-md-12">
                  <pagelet-figure-gallery v-if="form.galleryItem.length" :galleryItem="form.galleryItem" @onUpdateCurGallery="updateCurGallery" @changeGalleryItem="changeGalleryItemHandle"></pagelet-figure-gallery>
                </div>
              </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label>
              <div class="col-md-11" style="margin-top:20px;">
                <el-button type="primary" @click="updateDialogStatus(true, false, 'localUpdate')">添加图片</el-button>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">标题</label> 
              <div class="col-md-11">
                  <el-input placeholder="标题最多不超过60个字符1" v-model="form.title">
                    <template slot="append"><span>{{title.curLength}}</span>/30</template>
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">封面</label> 
              <div class="col-md-11">
                <div class="block"><el-checkbox v-model="form.coverChecked">单图</el-checkbox></div>
                <div class="article-cover-group">
                  <div class="article-cover" @click="updateDialogStatus(true, true, 'contentUpdate')">
                    <img :src="form.cover" v-if="form.cover" />
                    <i class="iconfont icon-tupiantianjia" v-else></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">类型</label> 
                <div class="col-md-11">
                  <el-select v-model="form.type" placeholder="请选择">
                    <el-option v-if="skinTypeArr.length" v-for="item in skinTypeArr" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>             
                </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">摘要</label> 
              <div class="col-md-11">
                <label for="prependedInput" class="form-control-label">选填，图集简介。</label>
                <el-input type="textarea" :rows="4" v-model="form.desc"></el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label> 
              <div class="col-md-11">
                <el-button type="primary">保存</el-button>
                <el-button >取消</el-button>
              </div>
            </div>
            </el-form>
          </div>
        </div>
      </div><!--/.col-->
    </div>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      size="small"
      :modal-append-to-body="false"
      :before-close="handleClose" class="dialog-photo">
        <photo-update></photo-update>
       <span slot="footer" class="dialog-footer">
        <el-button @click="updateDialogStatus(false)">取 消</el-button>
        <el-button type="primary" @click="updateImgHandle(updateImg)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import PageletFigureGallery from '@/components/photo/PageletFigureGallery'
import PhotoUpdate from '@/components/form/PhotoUpdate'
import getPhotoLibrary from '@/api/form/index.js'
export default {
  name: 'articleForm',
  components: {PageletFigureGallery, PhotoUpdate },
  data () {
    return {
      dialogVisible: false,
      tabs: {
        activeName: 'localUpdate',
        isContentPhoto: false
      },
      title: {
        curLength: 0
      },
      dialogImageUrl: '',
      updateImg: [],
      photoLibrary: [{
          gallery: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          textarea: '王小虎',
          id: 1
        },{
          gallery: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          textarea: '张二吗',
          id: 2
        }],
      updateMultiple: true,
      selectedCover: null,
      form: {
        title: '',
        subTitle: '',
        name: '',
        cover: '',
        desc: '这儿输入图集的简介',
        coverChecked: true,
        type: '',
        galleryItem: [{
          gallery: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          textarea: '王小虎',
          id: 1
        },{
          gallery: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          textarea: '张二吗',
          id: 2
        }]
      },

      skinTypeArr: [],
      dealineArr: []
    }
  },
  watch: {
    updateImg: function(val, oldVal){
      console.log('我改变了')
    }
  },
  created: function () {
    this.skinTypeArr = [{ value: '1', label: '普通' }, { value: '2', label: '史诗' }];
    this.dealineArr = [{ value: 1, label: '1天' }, { value: 2, label: '3天' }, { value: 3, label: '一周' }, { value: 4, label: '永久' }];
    this.texiaoArr =  [{ value: 0, label: '无' }, { value: 1, label: '有'}, { value: 2, label: '部分' },{ value: 3, label: '回城' }];


  },
  methods: {
    tabHandleClick (){
      console.log(321)
    },
    handleClose (done) {
      done()
    },
    onRadioChange (val) {
      console.log(this.form)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    changeGalleryItemHandle (data) {

      this.form.galleryItem = data;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    updateImgHandle (data){
      this.dialogVisible = false;
      if(data.length) {
        for(let i=0; i<data.length; i++) {
          let img = this.formartGallery(data[i])
          this.form.galleryItem.push(img)
        }
      }
      this.updateImg = [];

      if(this.tabs.activeName === 'contentPhoto') {
        this.updateFormCover(this.selectedCover)
      }

      if(this.tabs.activeName === '') {

      }
      //this.form.galleryItem.push(data)
    },
    handleSuccess (response, file, fileList){

      let img = this.formartImg(file)
      this.updateImg.push(img)
      console.log(this.updateImg)
    },
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
    updateCurGallery(diglogStatus, contentPhotoStatus, tabsActiveName) {
      
    },
    updateDialogStatus (diglogStatus, contentPhotoStatus, tabsActiveName){
      if(typeof diglogStatus === 'boolean') {
        this.dialogVisible = status;
      }
      if(typeof contentPhotoStatus === 'boolean') {
        this.tabs.isContentPhoto = contentPhotoStatus
      }

      if(tabsActiveName) {
        this.tabs.activeName = tabsActiveName;
      }
    },

    setTabsActiveName(name) {
      if(name) {
        this.tabs.activeName = name
      }
    },
    setSelectedCover (index, data) {
      this.selectedCover = data;
      console.log(this.selectedCover)
    },
    updateFormCover (data){
      this.form.cover = data.gallery || data.url;
    }
  }
}
</script>
<style lang="scss">
.dialog-photo {
  .el-dialog {
    width : 845px !important;
  }
  .el-dialog__body {
    margin-top: -34px;
  }
  .el-dialog__header {
    position: relative;
    z-index:9 
  }
}
.ql-container.ql-snow {
  height: 360px !important;
}
.article-cover-group {
  .article-cover {
    width: 150px;
    height: 105px;
    display: flex;
    justify-content: center;
    background: #f0f1f3;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  } 
  .iconfont {
    font-size: 46px;
    align-items: center;
    display: flex;    
    cursor: pointer;
  }
}
</style>
