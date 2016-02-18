/**
 * Created by ShahinPro on 2/17/16.
 */

  {{todosList}}
  <div ng-repeat="list in todosList">

    <p>{{ list }}</p>



************************************
**************cool button**********************
************************************

<script>
angular.module('transcludeFallbackContentExample', [])
.directive('myButton', function(){
            return {
              restrict: 'E',
              transclude: true,
              scope: true,
              template: '<button style="cursor: pointer;">' +
                          '<ng-transclude>' +
                            '<b style="color: red;">Button1</b>' +
                          '</ng-transclude>' +
                        '</button>'
            };
        });
</script>
<!-- fallback button content -->
<my-button id="fallback"></my-button>
<!-- modified button content -->
<my-button id="modified">
  <i style="color: green;">Button2</i>
</my-button>

************************************
************************************

<h1>todos_list:</h1><br>

<div ng-controller="todosController">
  <div ng-repeat="todo in todosList">
    <a href="#/{{todo.id}}">{{ todo.name }}</a>
  </div>

</div>


************************************
************************************