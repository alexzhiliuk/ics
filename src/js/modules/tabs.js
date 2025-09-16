$(document).ready(function() {
    // Конфигурация (можно менять под свои нужды)
    var tabsConfig = {
        containerAttr: 'data-tabs-container',
        triggerAttr: 'data-tab-trigger',
        targetAttr: 'data-tab-target',
        idAttr: 'data-tab-id',
        activeClass: '_active',
        hiddenClass: 'is-hidden',
        showClass: 'is-visible'
    };
    
    // Инициализация табов
    function initCustomTabs() {
        // Находим все контейнеры
        $('[' + tabsConfig.containerAttr + ']').each(function() {
            var $container = $(this);
            
            // Находим триггеры и цели
            var $triggers = $container.find(`[${tabsConfig.triggerAttr}]`);
            var $targets = $container.find(`[${tabsConfig.targetAttr}]`);

            hashToggle($triggers, $targets)
            
            // Обработчик клика
            $triggers.on('click', function(e) {
                e.preventDefault();
                
                var $trigger = $(this);
                var tabId = $trigger.attr(tabsConfig.idAttr);
                
                // Деактивируем все
                $triggers.removeClass(tabsConfig.activeClass);
                $targets.removeClass(tabsConfig.showClass).addClass(tabsConfig.hiddenClass).hide();
                
                // Активируем текущий
                $trigger.addClass(tabsConfig.activeClass);
                var $target = $(`[${tabsConfig.targetAttr}][${tabsConfig.idAttr}="${tabId}"]`);
                $target.removeClass(tabsConfig.hiddenClass).addClass(tabsConfig.showClass).show();
                hashSet($target);
            });
        });
    }

    function hashToggle(triggers, targets) { 
        const hash = window.location.hash

        if (!hash) { return }

        let target = targets.filter(hash)
        if (!target.length) { return }
        targets.hide()
        target.show()

        let tabId = target.attr(tabsConfig.idAttr)

        triggers.removeClass(tabsConfig.activeClass)
        triggers.filter(`[${tabsConfig.idAttr}=${tabId}]`).addClass(tabsConfig.activeClass)
    }

    function hashSet(target) {
        if (!target.attr("id")) { return }
        window.location.hash = "#" + target.attr("id")
    }
    
    initCustomTabs();
});

{/* <div class="" data-tabs-container="">
    <div class="triggers">
        <button data-tab-trigger="" data-tab-id="1">1</button>
        <button data-tab-trigger="" data-tab-id="2">2</button>
    </div>
    <div class="targets">
        <p data-tab-target="" data-tab-id="1">as</p>
        <p data-tab-target="" data-tab-id="2">asd</p>
    </div>
</div>
<div class="mask-1">
    <img src="@img/hero/img-1.png" alt="">
</div>  */}