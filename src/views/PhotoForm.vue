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
                  <pagelet-figure-gallery v-if="form.galleryItem.length" :galleryItem="form.galleryItem" @changeGalleryItem="changeGalleryItemHandle"></pagelet-figure-gallery>
                </div>
              </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label>
              <div class="col-md-11" style="margin-top:20px;">
                <el-button type="primary" @click="dialogPhotoVisible = true">添加图片</el-button>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">标题</label> 
              <div class="col-md-11">
                  <el-input placeholder="标题最多不超过60个字符1" v-model="form.title">
                    <template slot="append"><span>0</span>/30</template>
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">封面</label> 
              <div class="col-md-11">
                <div class="block"><el-checkbox v-model="form.coverChecked">单图</el-checkbox></div>
                <div class="article-cover-group">
                  <div class="article-cover">
                    <i class="iconfont icon-tupiantianjia"></i>
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
      :visible.sync="dialogPhotoVisible"
      size="small"
      :modal-append-to-body="false"
      :before-close="handleClose" class="dialogPhoto">
        <template>
          <el-tabs v-model="tabs.activeName" class="photo-tabs" @tab-click="tabHandleClick">
            <el-tab-pane label="上传图片" name="localUpdate">
              <div class="photo-upload-img">
                <div class="image-list" v-if="updateImg.length">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :file-list="updateImg"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                </div>
                <div class="img-placeholder" v-else>
                  <el-upload
                    class="img-upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    :show-file-list="false"
                    multiple
                    :file-list="updateImg">
                    <el-button size="small" type="primary">点击选择图片</el-button>
                    <div slot="tip" class="img-upload-tip">支持绝大多数图片格式，单张图片最大支持5MB</div>
                  </el-upload>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="素材库" name="onlineUpdate">
              <div class="photo-upload-img">
                <div class="img-placeholder">
                    <div slot="tip" class="img-upload-tip" v-if="!photoLibrary.length">你可以在上传图片的时候选择添加到素材库喔！</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>
       <span slot="footer" class="dialog-footer">
        <el-button @click="dialogPhotoVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateImgHandle(updateImg)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import PageletFigureGallery from '@/components/photo/PageletFigureGallery'
export default {
  name: 'articleForm',
  components: {PageletFigureGallery },
  data () {
    return {
      dialogPhotoVisible: false,
      tabs: {
        activeName: 'localUpdate'
      },
      dialogImageUrl: '',
      dialogVisible: false,
      updateImg: [],
      photoLibrary: [],
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
      this.dialogPhotoVisible = false;
      if(data.length) {
        for(let i=0; i<data.length; i++) {
          let img = this.formartGallery(data[i])
          this.form.galleryItem.push(img)
        }
      }
      this.updateImg = [];
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
    width: 100%;
    position: relative;
    color: #222;
  .el-upload-list__item-preview {
    display: none !important;
  }
  .el-upload--picture-card {
    border-width: 2px;
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
      margin: 10px;
      padding-top: 150px;
      text-align: center;
      background: url('../assets/update_photo.png') center 70px no-repeat;
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
  .dialogPhoto {
    .el-dialog {
      width : 845px !important;
    }
    .el-dialog__body {
      margin-top: -34px;
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
  } 
  .iconfont {
    font-size: 46px;
    align-items: center;
    display: flex;    
    cursor: pointer;
  }
}
</style>
