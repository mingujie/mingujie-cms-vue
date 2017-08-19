<template>
  <div class="animated">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>图片管理（已上传的照片会在这里展示）</strong> <small></small>
          </div>

          <div class="card-block">
          <div class="block clearfix">          
          <el-upload 
            style="float: right;"            
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple="true"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          </div>
          <div class="block">
            <div class="row">
            <div class="col-sm-3 col-md-3">
              <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2017-12-22</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-sm-3 col-md-3">
              <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2017-12-22</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-sm-3 col-md-3">
              <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2017-12-22</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-sm-3 col-md-3">
              <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2017-12-22</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </div>

            </div>
          </div>
          </div>
        </div>
      </div><!--/.col-->
    </div>
    <el-dialog
      title="选择图片"
      :visible.sync="dialogPhotoVisible"
      size="small"
      :before-close="handleClose" class="dialogPhoto">
        <div class="card">
          <div class="card-header"> 
           <el-button type="success" size="small">本地上传</el-button>    
          </div>
          <div class="card-block">
            <div class="row">
              <div class="col-md-3">
1
              </div>
                            <div class="col-md-3">
2
              </div>

              <div class="col-md-3">
3
              </div>
              <div class="col-md-3">
4
              </div>

            </div>
          </div>
      </div>
       <span slot="footer" class="dialog-footer">

        <el-button @click="dialogPhotoVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogPhotoVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'articleForm',
  components: { quillEditor },
  data () {
    return {
      dialogPhotoVisible: false,
      form: {
        title: '',
        subTitle: '',
        name: '',
        cover: '',
        desc: '',
        skinType: '',
        texiao: '',
        price: '',
        gold: '',
        update: '',
        buyAddress: '',
        leavle: '',
        status: '',
        dealine: 4,
        salesPrice: '',
        game: '',
        hero: '',
        skinFrom: ''
      },
      skinTypeArr: [],
      dealineArr: []
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }  
    }
}
</script>
<style>
  .dialogPhoto .el-dialog {
    width : 845px !important;
  }
.ql-container.ql-snow {
  height: 360px !important;
}
</style>
