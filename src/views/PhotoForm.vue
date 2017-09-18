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
                  <pagelet-figure-gallery v-if="form.galleryItem.length" :galleryItem="form.galleryItem" @onUpdateCurGallery="initUpdateConfig" @changeGalleryItem="changeGalleryItemHandle"></pagelet-figure-gallery>
                </div>
              </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label>
              <div class="col-md-11" style="margin-top:20px;">
                <el-button type="primary" @click="initUpdateConfig(true, false, 'localUpdate')">添加图片</el-button>
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
                  <div class="article-cover" @click="initUpdateConfig(true, true, 'singleUpdate')">
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
        <photo-update :updateConfig="updateConfig" :contentPhoto="form.galleryItem" @updateCover="onUpdateFormCover"></photo-update>
       <span slot="footer" class="dialog-footer">
        <el-button @click="onCancelHandle">取 消</el-button>
        <el-button type="primary" @click="initUpdateConfigHandle(updateImg)">确 定</el-button>
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
      updateConfig: {
        isMultiple: false,
        activeName: '',
        contentPicture: false
      },
      title: {
        curLength: 0
      },
      dialogImageUrl: '',
      updateImg: [],
      photoLibrary: [{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '王小虎',
          id: 1
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '张二吗',
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
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '王小虎',
          id: 1
        },{
          url: 'https://p3.pstatp.com/large/39bd000263658b94b2ff',
          desc: '张二吗',
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

    handleClose (done) {
      done()
    },

    changeGalleryItemHandle (data) {

      this.form.galleryItem = data;
    },

    initUpdateConfigHandle (data){


    },
    /**
     * updateDialogStatus 更新弹窗状态（隐藏或显示）
     * @param  { Boolean } status 弹窗状态 true false
     * @return {[type]}        [description]
     */
    updateDialogStatus (status){
      if(typeof status === 'boolean') {
        this.dialogVisible = status;
      }
    },
    /**
     * initUpdateConfig 更新上传照片组件状态
     * @param  { Boolean }  status  更新dialog状态 {true or false}
     * @param  { Boolean } isContentPicture 更新 tabs 正文内容 状态
     * @param  { String }  from  该状态来源，分别有正文图片（contentPicture）, 图片上传（localUpdate），素材库（onlineUpdate）
     * @return {[type]}                   [description]
     */
    initUpdateConfig (status, isContentPicture, from){
      this.updateDialogStatus(status)
      this.updateConfig.contentPicture = isContentPicture;
      this.updateConfig.activeName = from;
    },
    onCancelHandle (){
      this.updateDialogStatus(false)
    },
    /**
     * onUpdateFormCover 更新封面图片
     * @param  { Object } data 当前被选中的正文图片
     * @param  { Boolean } status dialog状态 
     * @return {[type]}      [description]
     */
    onUpdateFormCover (data, status){
      console.log(data);
      this.form.cover = data.url;
      this.updateDialogStatus(status)
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
