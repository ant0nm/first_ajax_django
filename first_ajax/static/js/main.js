document.addEventListener("DOMContentLoaded", function() {
  const rootBtn = document.getElementById('ajax_to_root');
  const pingPongBtn = document.getElementById('ajax_to_ping_pong');
  const countBtn = document.getElementById('ajax_to_count');
  const timeBtn = document.getElementById('ajax_to_time');
  const carBtn = document.getElementById('ajax_to_car');
  const responseSection = document.getElementById('responses');
  const ourList = document.getElementById('our_list');

  // adding event listeners
  rootBtn.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/');
  });
  pingPongBtn.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/ping').then(function(response) {
      // ping response
      console.log(response.data);
      const newDiv = document.createElement('div');
      newDiv.innerText = response.data;
      responseSection.append(newDiv);
    }).catch(function (error) {
      // pong response
      const newDiv = document.createElement('div');
      newDiv.innerText = error.response.data;
      responseSection.append(newDiv);
    }).then(function (response) {
      console.log("Hey the request finished!");
    })
  });
  countBtn.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/count').then(function(response) {
      const newDiv = document.createElement('div');
      newDiv.innerText = response.data;
      responseSection.append(newDiv);
    });
  });
  timeBtn.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/time', {params:{timezone:'America/Mexico_City'}}).then(function(response) {
      const newDiv = document.createElement('div');
      newDiv.innerText = response.data;
      responseSection.append(newDiv);
    });
  });
  carBtn.addEventListener('click', function() {
    axios.get('http://intro-ajax-api.herokuapp.com/a_car', {params:{timezone:'America/Mexico_City'}}).then(function(response) {
      ourList.insertAdjacentHTML('beforeend', response.data);
    });
  });
});
