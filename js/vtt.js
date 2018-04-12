/**
 * Created by kijong on 2018-04-12.
 */
function onWebPageLoad() {
    for (i=1;i<=23;i++) {
        item = $('<button>')
        item.attr('onclick','setEpisodeItemClicked(' + i.toString() + ')')
        item.attr('type', 'button')
        item.attr('class', 'list-group-item list-group-item-action')
        item.attr('id', 'episode-group-item-' + i.toString())
        item.text('Season1 Episode' + i.toString())
        $('#episode-list-group').append(item)
    }
}

function setEpisodeItemClicked(episodeId) {
    var _episodeId = episodeId
    $('#episode-list-group').children().each(function(){
        curr_id = Number(this.id.substring(19))
        $(this).removeClass('active')

        if (curr_id == _episodeId){
            $(this).addClass('active')
        }
    })
    getDialogListOfEpisode(episodeId)
}

function getDialogListOfEpisode(episodeId) {
    episodeIdFormal = "S1E" + episodeId.toString()
    jsonInput = '{"episode_id":"' + episodeIdFormal + '"}'
    $.post('http://kbox.kaist.ac.kr:7103/dialog_list', jsonInput, function(data) {
        updateDialogList(JSON.parse(data))
    });
}

function updateDialogList(data) {
    $('#dialog-list-group').empty()
    for (i=0;i<data.length;i++) {
        dialog_id = data[i]['FND_Dialog_ID']
        dialog_character = data[i]['Character_']
        dialog_str = data[i]['Dialog']

        if (dialog_character == "Stage direction")
            continue;

        item = $('<button>')
        item.attr('onclick','setDialogItemClicked(' + dialog_id.toString() + ')')
        item.attr('type', 'button')
        item.attr('class', 'list-group-item list-group-item-action')
        item.attr('id', 'dialog-group-item-' + data[i]['FND_Dialog_ID'].toString())

        item.text(dialog_character + ' : ' + dialog_str)
        $('#dialog-list-group').append(item)
    }
}

function setDialogItemClicked(dialogId) {
    var _dialogId = dialogId
    $('#dialog-list-group').children().each(function(){
        curr_id = Number(this.id.substring(18))
        $(this).removeClass('active')

        if (curr_id == _dialogId){
            $(this).addClass('active')
        }
    })
}

