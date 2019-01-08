$(document).ready(function($) {
  localStorage.setItem('indexMenu','mainMenu');
    $("#loader").addClass('showLoader');
    $.post(baseUrl + 'lessons/getList.php').done(function(data) {
        $("#lessons").html('');
        var i = 0;
        JSON.parse(data).forEach(function(el) {
            if (localStorage.getItem('userStatus') == 0) {
                i++;
                if (i < 4) { $("#lessons").append('<li idLes=' + el.id + '>Урок ' + el.nomer + ' ' + el.title + '</li>') } else {
                    $("#lessons").append('<li  class="noStat">Урок ' + el.nomer + ' ' + el.title + '</li>')
                }
            } else if (localStorage.getItem('userStatus') > 0)  {
                $("#lessons").append('<li idLes=' + el.id + '>Урок ' + el.nomer + ' ' + el.title + '</li>');
            }

            $("#loader").removeClass('showLoader');
        });
        $("[idles]").click(function(event) {
          localStorage.setItem('indexMenu','urokiMenu');
            $("#loader").addClass('showLoader');
            $("#lessons").hide();
            $("#lesson").show();
            $.post(baseUrl + 'lessons/getLesson.php', { id_lesson: $(this).attr('idles') }).done(function(data) {
                $("#loader").removeClass('showLoader');
                var lessonData = JSON.parse(data);
                if (lessonData[0].answer == true) {
                    $("#lessonNumber").html('Урок ' + lessonData[0].nomer);
                    $("#lessonTitle").html(lessonData[0].title);
                    $("#videoFrame").html(lessonData[0].link);
                    $("#videoDesc").html(lessonData[0].descript);
                } else {
                    alert('ошибка при загрузке');
                }
            });
        });

        $(".noStat").click(function(event) {
        	console.log('click');
            $(".nonStat,#nonStat").show();
        });
    });
});
