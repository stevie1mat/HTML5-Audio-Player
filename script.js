
/*PLAYER EM MATÉRIA*/
var musicas = $('audio');
musicas.each(function (index) {
	this.volume=.75;

	//Progresso e Duração
	this.addEventListener('timeupdate', function () {
		var audioInfo = $(this).parent().find('div.audio-info');
		var currentTime = this.currentTime;
	    var duration = this.duration;
	    var progress = ((currentTime/duration) * 100);
		$(audioInfo).find('span.progress-time').text(timeToStr(currentTime));
		$(audioInfo).find('div.progress-bar > span.current-bar').css('width', progress + '%');
	});

	this.addEventListener('durationchange', function () {
		var audioInfo = $(this).parent().find('div.audio-info');
		$(audioInfo).find('span.total-time').text(timeToStr(this.duration));
		timeToStr(duration);
	});

	function timeToStr(time) {
		var sec = Math.floor(time % 60);
		var min = Math.floor((time / 60) % 60);
		var hou = Math.floor(time / 3600);
		var str = (min < 10 ? '0' : '') + min + ":" + (sec < 10 ? '0' : '') + sec;
		return (hou > 0 ? (hou < 10 ? '0' : '') + hou + ':' : '') + str;
	}

	//botao Play e Pause
	$(this).parent().find('div.play > span.player-audio').click(function () {
		var audio = $(this).parent().parent().find('audio')[0];
		if($(this).hasClass('pause')) { // se estiver tocando
			audio.pause();
			$(this).removeClass('pause');
		} else { // se não estiver tocando
			audio.play();
			$(this).addClass('pause');
		}
	});

	/*botao mute*/
	var btMute = $(this).parent().find('div.volume > div.mute');
	btMute.click(function(){
		var audio = $(this).parent().parent().find('audio')[0];
		var btVolume = $(this).siblings('.barras');
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			audio.volume=0.25;
			btVolume.find('.aud1').addClass('active');
		}else{
			$(this).addClass('active');
			audio.volume=0;
				btVolume.find('.aud1').removeClass('active');
				btVolume.find('.aud2').removeClass('active');
				btVolume.find('.aud3').removeClass('active');
				btVolume.find('.aud4').removeClass('active');
		}
	});

	/*botao volume 1*/
	btAud1 = $(this).parent().find('div.volume > div.barras > span.aud1');
	btAud1.click(function(){
		var audio = $(this).parent().parent().parent().find('audio')[0];
		var btVolume = $(this);

		audio.volume=0.25;
		btVolume.addClass('active');
		btVolume.siblings('.aud2').removeClass('active');
		btVolume.siblings('.aud3').removeClass('active');
		btVolume.siblings('.aud4').removeClass('active');
		$(this).parent().parent().find('.mute').removeClass('active');
	});

	/*botao volume 2*/
	btAud2 = $(this).parent().find('div.volume > div.barras > span.aud2');
	btAud2.click(function(){
		var audio = $(this).parent().parent().parent().find('audio')[0];
		var btVolume = $(this);

		audio.volume=0.5;
		btVolume.siblings('.aud1').addClass('active');
		btVolume.addClass('active');
		btVolume.siblings('.aud3').removeClass('active');
		btVolume.siblings('.aud4').removeClass('active');
		$(this).parent().parent().find('.mute').removeClass('active');
	});

	/*botao volume 3*/
	btAud3 = $(this).parent().find('div.volume > div.barras > span.aud3');
	btAud3.click(function(){
		var audio = $(this).parent().parent().parent().find('audio')[0];
		var btVolume = $(this);

		audio.volume=0.75;
		btVolume.siblings('.aud1').addClass('active');
		btVolume.siblings('.aud2').addClass('active');
		btVolume.addClass('active');
		btVolume.siblings('.aud4').removeClass('active');
		$(this).parent().parent().find('.mute').removeClass('active');
	});

	/*botao volume 4*/
	btAud4 = $(this).parent().find('div.volume > div.barras > span.aud4');
	btAud4.click(function(){
		var audio = $(this).parent().parent().parent().find('audio')[0];
		var btVolume = $(this);

		audio.volume=1;
		btVolume.siblings('.aud1').addClass('active');
		btVolume.siblings('.aud2').addClass('active');
		btVolume.siblings('.aud3').addClass('active');
		btVolume.addClass('active');
		$(this).parent().parent().find('.mute').removeClass('active');
	});
});