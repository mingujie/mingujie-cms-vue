<template>
  <div class="animated">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>新建图文消息</strong> <small></small>
          </div>

          <div class="card-block">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" id="form">
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">标题</label> 
              <div class="col-md-11">
                  <el-form-item prop="title" class="form-item">
                  <el-input placeholder="标题最多不超过60个字符" v-model="form.title">
                    <template slot="append"><span>0</span>/60</template>
                  </el-input>
                  </el-form-item>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">副标题</label> 
              <div class="col-md-11">
              <el-form-item prop="subTitle" class="form-item">
                  <el-input placeholder="选填内容" v-model="form.subTitle">
                    <template slot="append"><span>0</span>/60</template>
                  </el-input>
              </el-form-item>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">正文</label> 
              <div class="col-md-11">
              <el-form-item prop="content" class="form-item">
                <quill-editor :rows="8" ref="myTextEditor"
                      v-model="form.content"
                      :config="editor.options"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
                </quill-editor>
              </el-form-item>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">封面</label> 
              <div class="col-md-11">
                <label for="prependedInput" class="form-control-label">最少一张封面，文章阅读量嗖嗖的</label>
                <div class="block">
                <el-form-item prop="cover" class="form-item">
                  <el-button size="small">从正文选择</el-button>
                  <el-button size="small" @click="dialogPhotoVisible = true">从图片库选择</el-button>
                </el-form-item>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">摘要</label> 
              <div class="col-md-11">
                <label for="prependedInput" class="form-control-label">选填，如果不填写会默认抓取正文前54个字</label>
                <el-form-item prop="desc" class="form-item">

                <el-input type="textarea" :rows="4" v-model="form.desc"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label> 
              <div class="col-md-11">
                <el-button type="primary" @click="submitForm('form')">发表</el-button>
                <el-button @click="saveFormOutline">存草稿</el-button>
                <el-button >取消</el-button>
              </div>
            </div>
            </el-form>
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
      editor: {
        options: {
        },
        content: ''
      },
      form: {
        title: '',
        subTitle: '',
        content: '',
        cover: '1111',
        desc: ''
      },
      rules: {
          title: [
            { required: true, message: '麻蛋，标题都能忘记填！', trigger: 'blur' }          
          ],
          content: [
          { required: true, message: '内容，内容，内容！！！重要的事情说三遍', trigger: 'change'}  
          ],
          cover: [
          { required: true, message: '封面也不能少哟', trigger: 'blur' }  
          ]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            console.log('内容提交',this.form)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      saveFormOutline(){
        console.log('保存草稿')
      },
    handleClose (done) {
      done()
    },
    onRadioChange (val) {
      console.log(this.form)
    },
    onEditorBlur () {
      console.log(11213)
    },
    onEditorFocus () {

    },
    onEditorReady () {

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
.form-item .el-form-item__content {
  margin: 0 !important;
}
</style>
