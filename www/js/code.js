$(document).ready(function() { 
    
    setTimeout(function(){
        $('#preloader').fadeOut('slow');
    }, 5000);
    
    var jsonUrl2 = 'https://www.norimaq.com.br/tutormaq//wp-json/acf/v3/options/configuracoes/';
	 
	 $.ajax({
		    dataType: 'json',
		    url: jsonUrl2,
	        })
	        .done(function(response){

		    var logo = '', logo2 = '', fundo = '', header = '', footer = '', cor = '', cor2 = '', email = '';
			
			logo += '<img src="' + response.acf.logo + '" alt="" title="" border="0" />';
			logo2 += '<a href="home.html"><img src="' + response.acf.logo2 + '" alt="" title="" border="0" /></a>';
			
            header += '<div class="gohome"><a href="#" id="homebutton" onclick="window.open(document.referrer,\'_self\');"><i class="fa fa-chevron-circle-left fa-2x"></i></a></div>';
            header += '<div class="gologo"><a href="home.html" id="contactbutton"><img src="' + response.acf.logo2 + '" /></a></div>';
		    header += '<div class="gomenu"><a href="informacoes.html" id="contactbutton"><i class="fa fa-info-circle fa-2x"></i></a></div>';
			
            footer += '<div class="gohome"><a href="home.html"><i class="fa fa-home fa-2x"></i></a></div>';
            footer += '<div class="gohome"><a href="equipamentos.html"><i class="fa fa-video fa-2x"></i></a></div>';
            footer += '<div class="gohome"><a href="equipamentos.html"><i class="fa fa-file-pdf fa-2x"></i></a></div>';
            footer += '<div class="gohome"><a href="contato.html"><i class="fa fa-envelope fa-2x"></i></a></div>';
		    
		    $('.logo').append(logo2);
		    $('.logo2').append(logo);
		    $(".sliderbg_menu").css("");
		    
		    $(".sliderbg_menu").css({"background-image": "url('" + response.acf.fundo + "')", "background-color" :  response.acf.cor, "background-color" : "linear-gradient(90deg, " + response.acf.cor2 + " 0%, " + response.acf.cor + " 35%, " + response.acf.cor + " 100%)"});
		    
		    $('#header').append(header).css("background-color", response.acf.cor);
		    $('#footer').append(footer).css("background-color", response.acf.cor2);
		    
		    $('ul.posts a').css("color", response.acf.cor);
		    
		    $('.toogle_wrap_blog').css("background-color", response.acf.cor);
		    
		    $('.informacoes').append(response.acf.informacoes);
		    
		    $('[name=to]').val(response.acf.email);
		
	});
	
	
	"use strict";
	
	$(".toggle_container_blog").hide();
	$('.trigger_blog').click(toggleblog);
	
	function toggleblog() {
		$(this).toggleClass("activeb").next().slideToggle("slow");
		return false;
	}
	
 /* 
						   
	var hash = window.location.hash.substr(1);
	var href = $('#menu li a.insidelink').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});

    $('a.insidelink').click(homenavclick);
	
	$('a.externallink').click(externalclick);
	

	function externalclick() {	
								  
		window.location.href  = $(this).attr('href');
	}

	function homenavclick() {								  
									  
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').fadeOut('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent)
		}
		function showNewContent() {
			
			$('a.insidelink').click(homenavclick);
			
			$('#content').fadeIn('normal',hideLoader());
			$('#homebutton').click(homebuttonclick);
			$('#contactbutton').click(contactbuttonclick);
			$('#tabsmenu').tabify();
			$(".toggle_container").hide();
			$('.trigger').click(togglenormal);
			$(".toggle_container_blog").hide();
			$('.trigger_blog').click(toggleblog);
			$('.post_more').click(postmore);
			$(".post_details_page li").hide();
			$('.posts li').click(postclick);
			$(".posts li").hide();	
			size_li = $(".posts li").size();
			x=4;
			$('.posts li:lt('+x+')').show();
			$('#loadMore').click(postloadmore);
			$(".swipebox").swipebox();
			$(".videocontainer").fitVids();
			$("#CommentForm").validate({
			submitHandler: function(form) {
			ajaxContact(form);
			return false;
			}
			});
			$(".tweet").tweet({
			  modpath: 'js/twitter/',
			  join_text: "auto",
			  username: "sindevothemes",
			  count: 5,
			  auto_join_text_default: "we said,",
			  auto_join_text_ed: "we",
			  auto_join_text_ing: "we were",
			  auto_join_text_reply: "we replied",
			  auto_join_text_url: "we were checking out",
			  loading_text: "loading tweets..."
			});
			
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	}
	
	
	$('#homebutton').click(homebuttonclick);
	function homebuttonclick() {	
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').fadeOut('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		//alert(window.location.hash);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent)
		}
		function showNewContent() {
			$('#content').fadeIn('normal',hideLoader());
			$('#menu li a.insidelink').click(homenavclick);
			$('#menu li a.externallink').click(externalclick);
			$('#contactbutton').click(contactbuttonclick);
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	}

	
	
	$('#contactbutton').click(contactbuttonclick);
	function contactbuttonclick() {	
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').fadeOut('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		//alert(window.location.hash);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent)
		}
		function showNewContent() {
			$('#content').fadeIn('normal',hideLoader());
			$('#menu li a.insidelink').click(homenavclick);
			$('#menu li a.externallink').click(externalclick);
			$('#homebutton').click(homebuttonclick);
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	}
	
	function togglenormal() {	
	   $(this).toggleClass("active").next().slideToggle("slow");
		return false;
	}
	
	function toggleblog() {
		$(this).toggleClass("activeb").next().slideToggle("slow");
		return false;
	}
	function postmore() {
		$(this).toggleClass("activep").next().slideToggle("slow");
		return false;
	}
	function postclick() {
	
		p_ID = this.id;
		
		$(".post_details_page").find("li").each(function() { 
			if(this.id == p_ID)
			{
				$(".posts_archive_page").hide(); 
				var detailspostid = $(".post_details_page li#" + this.id);
				detailspostid.show();
				$('.backtoblog').click(function(){
					 detailspostid.hide();
					 $(".posts_archive_page").show();
				});	
			}
		});
	
	}
	
    function postloadmore() {
        x= (x+1 <= size_li) ? x+1 : size_li;
        $('.posts li:lt('+x+')').show();
        if(x == size_li){
            $('#loadMore').hide();
			$('#showLess').show();
        }
    }
*/
});