<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>新建视频</strong> <small></small>
          </div>

          <div class="card-block">
            <el-form ref="form" :model="form" label-width="80px" id="form">
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">上传视频</label> 
              <div class="col-md-11">
                <label for="prependedInput" class="form-control-label">视频不能超过20M，超过20M请选择到其他平台上传后再复制视频地址到这里</label>
                  <div class="block">
                        <el-button size="small" @click="dialogPhotoVisible = true">选择视频</el-button>

                  </div>

              </div>
            </div>

            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">标题</label> 
              <div class="col-md-11">
                  <el-input placeholder="标题最多不超过60个字符1" v-model="form.title">
                    <template slot="append"><span>0</span>/60</template>
                  </el-input>
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
              <label for="text-input" class="col-md-1 form-control-label">地址</label> 
              <div class="col-md-11">
                  <el-input placeholder="请填写视频地址，非SWF格式的" v-model="form.videoUrl">
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
                  <el-select v-model="form.videoType" placeholder="请选择">
                    <el-option v-if="videoTypeArr.length" v-for="item in videoTypeArr" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>             
                </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">标签</label> 
              <div class="col-md-11">
                  <el-input placeholder="标题最多不超过60个字符1" v-model="form.title">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">所属</label> 
                <div class="col-md-11">
                  <el-select v-model="form.games" placeholder="请选择">
                    <el-option v-if="games.length" v-for="item in games" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>             
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
        videoUrl: '',
        subTitle: '',
        name: '',
        cover: '',
        desc: '',
        videoType: [],
        update: '',
        salesPrice: '',
        game: '',
        hero: '',
        games:[]
      },
      videoTypeArr: [],
    }
  },
  created: function () {
    this.videoTypeArr = [{ value: '1', label: '皮肤' }, { value: '2', label: 'cosplay' }];
    this.games = [{ value: 'lol', label: '英雄联盟' }, { value: 'pvp', label: '王者荣耀' }];

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
