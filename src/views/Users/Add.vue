<template>
  <div class="users">
    <div class="container">
      <div class="actionbar">
        <h3>Add a new user</h3>
      </div>

      <form @submit.prevent="save">
        <div class="form-group">
          <label for="input-id">Employee ID</label>
          <input v-model="form.empid" type="text" class="form-control" id="input-id" aria-describedby="idHelp" placeholder="Enter the employee's ID">
        </div>
        <div class="form-group">
          <label for="input-name">Name</label>
          <input v-model="form.empname" type="text" class="form-control" id="input-name" aria-describedby="nameHelp" placeholder="Enter the employee's name">
        </div>
        <div class="form-group">
          <label for="input-deptname">Department Name</label>
          <input v-model="form.deptname" type="text" class="form-control" id="input-deptname" aria-describedby="deptnameHelp" placeholder="Enter the employee's department name">
        </div>
        <div class="form-group">
          <label for="input-email">Email</label>
          <input v-model="form.email" type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter the employee's email address">
        </div>
        <div class="form-group">
          <label for="input-ext">Extension</label>
          <input v-model="form.ext" type="text" class="form-control" id="input-ext" aria-describedby="extHelp" placeholder="Enter the employee's extension number">
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-link" @click="goBack">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {add} from "../../services/EmployeeService";

  export default {
      data() {
          return {
              form: {
                  empid: '',
                  empname: '',
                  deptname: '',
                  email: '',
                  ext: ''
              }
          }
      },
      methods: {
          save() {
              add(this.form).then(res => console.log(res));
              this.goBack();
          },
          goBack() {
              this.$router.push({name: 'users'});
          }
      }
  }
</script>

<style>
  form {
    text-align: left;
  }
  .form-group label {
    margin-bottom: 2px;
  }
  .actionbar {
    margin-bottom: 20px;
    text-align: left;
  }
</style>