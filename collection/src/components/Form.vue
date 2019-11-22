<template>
  <div>
    <my-header></my-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <form action="https://formspree.io/vv-box@i.ua" method="POST">
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input type="text" class="form-control" name="name" id="exampleInputPassword1" placeholder="Name" required />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" name="_replyto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"   required />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div> 
            <input type="hidden" name="_subject" value="New submission!" /> <!-- тема письма--> 
            <!-- <input type="hidden" name="_next" value="//site.io/thanks.html"/> -->  <!-- переход после отправки письма--> 
            <!-- <input type="hidden" name="_cc" value="my-test-box@bigmir.net"/> -->  <!-- куда отправлять копию письма-->
            <!-- <input type="text" name="_gotcha" style="display: none"/> -->  <!--против спам ботов -->       
            <div class="form-group">
              <label for="logTextarea">Message</label>
              <textarea class="form-control" id="logTextarea" rows="4" name="message" placeholder="Message text" required ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block" value="Send">Submit</button>
          </form>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header.vue';
export default {
  name: 'Form',
  components: { MyHeader }
}
</script>