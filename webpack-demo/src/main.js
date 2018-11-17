import $ from 'jquery'
import './css/index.css'
import './css/test.less'
import './css/demo.scss'
$(function(){
  $('li:odd').css('backgroundColor','red')
  $('li:even').css('backgroundColor','purple')
})