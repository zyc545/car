/**
 * Build: 2014-11-27 13:10
 * Update: 2015-01-28 09:20
 */

(function ($) {
    /**
     * Tab Switch
     * @param {String} options selected 选中状态 class
     * @param {String} options e 事件触发类型
     */
    $.fn.TabSwitch = function (options) {
        var defaults = {
            selected: 'ck',
            e: 'click'
        };

        var option = $.extend(defaults, options);

        return this.each(function () {
            var o = option,
                self = $(this),
                tabTrigger = self.find('.ui-tab-hd').children(),
                tabGallery = self.find('.ui-tab-bd').children();

            tabTrigger.on(o.e, function (e) {
                e.preventDefault();
                var index = tabTrigger.index(this);
                tabTrigger.eq(index).addClass(o.selected).siblings().removeClass(o.selected);
                tabGallery.eq(index).show().siblings().hide();
            });
        });
    };
}(jQuery));

$(function () {
    $('.J_TabSwitch').TabSwitch({});

    // Added List Modify
    $('#J_AddedListDetailBtn').click(function () {
        $('#J_AddedListDetail').addClass('hidden');
        $('#J_AddedListModify').removeClass('hidden');
    });

    $('#J_AddedListModifyBtn').click(function () {
        $('#J_AddedListModify').addClass('hidden');
        $('#J_AddedListDetail').removeClass('hidden');
    });

  
});


function tab(menu_id, text_id, menuClass) {
    $("." + menu_id + " > ul > li").click(function () {

        $(this).addClass(menuClass)
				.siblings().removeClass(menuClass);

        var index = $("." + menu_id + " > ul > li").index(this);

        $("." + text_id + " > div")
				.eq(index).show()
				.siblings().hide();
    });
}
tab("my-havenav", "prop-info", "current");

tab("manage-money", "manage-classify", "opt-ck");

/*添加修改发票*/
$(function () {
    $("#btnShowInvoice").click(function () {
        $(".invoice-edit-panel").toggle();
    })
    $("#addInvoice").on("click", function () {
        window.myshowBox('', '', '460', '430', 'false', 'window-scroll');
        $(".div-myshowbox").html($(".invoice-nbox").html());

        function tab(menu_id, text_id, menuClass) {
            $("." + menu_id + " > ul > li").on("click", function () {
                $(this).addClass(menuClass).siblings().removeClass(menuClass);

                var index = $("." + menu_id + " > ul > li").index(this);

                $("." + text_id + " > div")
                    .eq(index).show()
                    .siblings().hide();
            });
        }
        tab("invoice-nclassify", "invoice-ninfo", "invoice-ncur");

        function lab(menu_id, text_id) {
            $("." + menu_id + " > label > input").on("click", function () {
                $(this).attr("checked", true);

                var radio = $("." + menu_id + " > label > input").index(this);

                $("." + text_id + " > div").hide().eq(radio).show();
            });
        }
        lab("invoice-nelectron", "invoice-nelectron-dt");
        lab("invoice-ncommon", "invoice-ncommon-dt");
    })

})

$(function () {
    //违章处理流程
    $("#illegally-opt").click(function() {
        $(".handle-box").show();
    });
    $(".handle-close").click(function() {
        $(".handle-box").hide();
    });
})