<template>
  <div class="users">
    <div class="container">
      <div class="actionbar">
        <router-link to="/users/add" class="btn btn-dark">Add User</router-link>
      </div>

      <table class="table">
        <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Email</th>
          <th scope="col">Extension</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in this.$store.state.users">
            <th scope="row">{{index+1}}</th>
            <td>{{user.empid}}</td>
            <td>{{user.empname}}</td>
            <td>{{user.deptname}}</td>
            <td>{{user.email}}</td>
            <td>{{user.ext}}</td>
            <td><router-link :to="'/user/'+user.pk"><i class="fa fa-pencil"></i></router-link></td>
            <td><button type="button" @click="del(user.pk)"><i class="fa fa-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {del, loadEmployees} from "../../services/EmployeeService";

  export default {
      mounted() {
          loadEmployees();
      },
      methods: {
          del(pk) {
              del(pk).then(res => {
                  console.log(res);
                  loadEmployees();
              });
          }
      }
  }
</script>

<style>
  .actionbar {
    margin-bottom: 20px;
    text-align: left;
  }
</style>