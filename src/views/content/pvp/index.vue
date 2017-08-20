<template>
  <div class="animated">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>新建图集</strong> <small></small>
          </div>

          <div class="card-block">
            <el-form ref="form" :model="form" label-width="80px" id="form">
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label> 
              <div class="col-md-11">
              <el-button type="primary">添加图片</el-button>
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
                <el-button size="small" @click="dialogPhotoVisible = true">从图片库选择</el-button>
              </div>
            </div>

            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">类型</label> 
                <div class="col-md-11">
                  <el-select v-model="form.skinType" placeholder="请选择">
                    <el-option v-if="skinTypeArr.length" v-for="item in skinTypeArr" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>             
                </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">摘要</label> 
              <div class="col-md-11">
                <label for="prependedInput" class="form-control-label">选填，如果不填写会默认抓取正文前54个字</label>
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
    onRadioChange (val) {
      console.log(this.form)
    },
    onEditorBlur () {

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
</style>
