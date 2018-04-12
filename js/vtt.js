/**
 * Created by kijong on 2018-04-12.
 */
function onWebPageLoad() {
    for (i=1;i<=23;i++) {
        item = $('<button>')
        item.attr('onclick','onEpisodeItemClicked(' + i.toString() + ')')
        item.attr('type', 'button')
        item.attr('class', 'list-group-item list-group-item-action')
        item.attr('id', 'episode-group-item-' + i.toString())
        if (i==1) {
            item.addClass('active')
        }
        item.text('Season1 Episode' + i.toString())
        $('#episode-list-group').append(item)
    }
}

function onEpisodeItemClicked(episodeId) {
    var episodeId = episodeId
    $('#episode-list-group').children().each(function(){
        curr_id = Number(this.id.substring(19))
        $(this).removeClass('active')

        if (curr_id == episodeId){
            $(this).addClass('active')
        }
    })
}

function loadAndInitializeEpisodeList() {

 /*
 <a href="#" class="list-group-item active">First item teadfefaefefaefa</a>
            <a href="#" class="list-group-item">Second item</a>
            <a href="#" class="list-group-item">Third item</a>
  */
}