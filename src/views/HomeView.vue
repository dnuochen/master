<template>
  <div class="home">
<!--  输入框  -->
    <div class="input">
      <div>
        <el-input class="inp" v-model="store.state.mess"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="add">添加数据</el-button>
      </div>
    </div>
<!--  列表  -->
    <div class="list">
      <el-table :data="store.state.arrs">
        <el-table-column type="index" width="60" label="索引"></el-table-column>
        <el-table-column prop="text" label="文本"></el-table-column>
        <el-table-column align="right">
<!--       自定义   -->
          <template v-slot:header>
            <div>
              <span>操作</span>
            </div>
          </template>
<!--          -->
          <template v-slot:default="scope">
            <div @click="delete_fn(scope.$index,scope.row)">
              <span class="deletes">删除</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";

let store=useStore();
let add=function(){
  store.commit("increment")
}
let delete_fn=function(index,row){
  store.commit("delete_mutation",index);
}
</script>

<style lang="scss" scoped>
.home{
  width:600px;
  margin:0 auto;
  .input{
    width:600px;
    display:flex;
    div:nth-of-type(1){
      flex:8;
      ::v-deep .inp{
        height:45px;
      }
    }
    div:nth-of-type(2){
      flex:2;
      ::v-deep .el-button{
        height:45px;
      }
    }
  }
  .list{
    box-sizing: border-box;
    width:600px;
    padding:0 40px 0 0;
    .deletes{
      color:red;
    }
  }
}
</style>
