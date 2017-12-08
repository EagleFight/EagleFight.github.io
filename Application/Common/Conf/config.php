<?php
return array(
	//'配置项'=>'配置值'
    //URL
    'URL_CASE_INSENSITIVE' => true,
    'URL_HTML_SUFFIX'      => '',
    'URL_MODEL'            => URL_REWRITE,
    //Module
    'MODULE_ALLOW_LIST' => array('Home', 'Mng', 'Api','Wap','Mobile','Nurse','Manager'),
    'DEFAULT_MODULE'    => 'Home',
    'URL_MODULE_MAP'    => array('mng'=>'admin'),
);