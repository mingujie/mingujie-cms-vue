<template>
<div class="animated fadeIn">    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>{{pageTitle}}</strong> <small></small>
          </div>

          <div class="card-block">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" id="form">
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">标题</label> 
              <div class="col-md-11">
                  <el-form-item prop="title" class="form-item">
                  <el-input placeholder="标题最多不超过60个字符" v-model="form.title">
                    <template slot="append"><span class="number">{{titleLen}}</span>/30</template>
                  </el-input>
                  </el-form-item>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">副标题</label> 
              <div class="col-md-11">
              <el-form-item prop="subTitle" class="form-item">
                  <el-input placeholder="选填内容" v-model="form.subTitle">
                    <template slot="append"><span>0</span>/30</template>
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
                <label for="prependedInput" class="form-control-label">有封面，文章阅读量嗖嗖的</label>
                <div class="article-cover-group">
                  <div class="article-cover" @click="initUpdateConfig(true, true, 'singleUpdate')">
                    <img :src="form.cover" v-if="form.cover" />
                    <i class="iconfont icon-tupiantianjia" v-else></i>
                  </div>
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
                <el-button @click="onCancelHandle">取消</el-button>
              </div>
            </div>
            </el-form>
          </div>
        </div>
      </div><!--/.col-->
    </div>
    <el-dialog
      title="选择封面"
      :visible.sync="dialogVisible"
      size="small"
      :modal-append-to-body="false"
      :before-close="handleClose" class="dialog-photo">
       啊
       <span slot="footer" class="dialog-footer">
        <el-button @click="onCancelHandle">取 消</el-button>
        <el-button type="primary" @click="onConfirmHandle(updateImg)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import { checkStrLen } from '@/utils/validate'

export default {
  name: 'articleForm',
  components: { quillEditor },
  data () {
    var _self = this;

    var validatrStrLen = (rule, value, callback) => {
      _self.titleLen = checkStrLen(value)
      if(!value) {
         callback(new Error('标题不能为空'));
      }else {
        if(_self.titleLen > 30 || _self.titleLen < 6) {
          callback(new Error('最少6个字符，最多不超过30个字符'));
        }
      }
    }

    return {
      isModifyStatus: false,
      dialogVisible: false,
      titleLen: 0,
      editor: {
        options: {
        },
        content: ''
      },
      pageTitle: '',
      form: {
        title: '',
        subTitle: '',
        content: '',
        cover: '',
        desc: ''
      },
      rules: {
          title: [
            {trigger: 'change',validator: validatrStrLen  }          
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
  created (){
    let $route = this.$route;
    let isModifyStatus = this.isModifyStatusHandle($route);
    //根据状态更新视图
    if(isModifyStatus) {
      this.pageTitle = '修改图文信息';
      this.getArticleData($route.params.aid)
    }else {
      this.pageTitle = '新建图文信息';
    }
  },
  methods: {
    onCancelHandle (){
      this.$router.push({ name: 'ArticleList'})
    },
    getArticleData (aid){
      let data =  {
        title: 'Nihaoadasdad',
        subTitle: 'fffff',
        content: '32132131',
        cover: '1111',
        desc: 'dddsdada'
      }
      this.renderArticleData(data)
    },
    initUpdateConfig (status, isContentPicture, from){
      this.updateDialogStatus(status)
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
     * renderArticleData 在组件中渲染数据
     * @param  { Object } data 表单数据
     * @return {[type]}      [description]
     */
    renderArticleData(data){
      this.form = data;
    },
    /**
     * isModifyStatusHandle 检查是否属于编辑状态
     * @param  {[type]}  $route 路由对象
     * @return {Boolean}      编辑中返回true，否则false
     */
      isModifyStatusHandle ($route){
        var params = $route.params;
        if(params.aid) {
         return true;
        }else {
          return false;
        }
      },
      /**
       * submitForm 校验表单并提交
       * @param  { String } formName 表单名称
       * @return { undefined }         undefined
       */
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
<style lang="scss">
  .dialogPhoto .el-dialog {
    width : 845px !important;
  }
.ql-container.ql-snow {
  height: 360px !important;
}
.form-item .el-form-item__content {
  margin: 0 !important;
}
.warning {
  .el-input-group__append {
    color: #f00;
  }
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
