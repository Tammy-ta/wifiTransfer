/**
 * Created by tammyun on 2017/12/6.
 */
/* --------Main----------- */
$(document).ready(function () {

    // 复选框 全选

    let lists = $('.itemLists');
    let selectall = $('.select_all');
    let checkedNum = 0;

    lists.on('click', '.video', function (e, i) {
        e.stopPropagation();

        let lens = $('.itemLists').find('.item').length;

        if ($(this)[0].previousElementSibling.checked) {
            checkedNum--;
            if (checkedNum <= 0) {
                checkedNum == 0;
            }
            $(this)[0].className = 'video';
        } else {
            checkedNum++;
            $(this)[0].className = 'video active';
        }

        if (checkedNum == lens) {
            selectall.text('UnSelect all');
        } else {
            selectall.text('Select all');
        }
    });

    selectall.on('click', function () {

        let len = $('.itemLists').find('.item').length;

        if (checkedNum >= 0 && checkedNum < len) {
            checkedNum = len;
            $('.itemLists').find('.video').each(function (i, e) {
                $('.itemLists').find('.video').eq(i)[0].previousElementSibling.checked = true;
                $('.itemLists').find('.video').eq(i).addClass('active');
                selectall.text('UnSelect all');
            });
        } else {
            checkedNum = 0;
            $('.itemLists').find('.video').each(function (i, e) {
                $('.itemLists').find('.video').eq(i)[0].previousElementSibling.checked = false;
                $('.itemLists').find('.video').eq(i).removeClass('active');
                selectall.text('Select all');
            });

        }

    });
});
