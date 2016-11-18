


//var $, cardHeight, cardName, cardWidth, gridSize, serialNumber, cardDescription;

serialNumber = 0;

gridSize = 10;

cardWidth = 100;

cardHeight = 171;



cardName = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgment', 'The World', 'Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands', 'Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups', 'Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords', 'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords', 'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords', 'Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'];

//cardDescription_up = ['0 up', '1 up', '2 up', '3 up', '4 up', '5 up', '6 up', '7 up', '8 up', '9 up', '10 up', '11 up', '12 up', '13 up', '14 up', '15 up', '16 up', '17 up', '18 up', '19 up', '20 up', '21 up', '22 up', '23 up', '24 up', '25 up', '26 up', '27 up', '28 up', '29 up', '30 up', '31 up', '32 up', '33 up', '34 up', '35 up', '36 up', '37 up', '38 up', '39 up', '40 up', '41 up', '42 up', '43 up', '44 up', '45 up', '46 up', '47 up', '48 up', '49 up', '50 up', '51 up', '52 up', '53 up', '54 up', '55 up', '56 up', '57 up', '58 up', '59 up', '60 up', '61 up', '62 up', '63 up', '64 up', '65 up', '66 up', '67 up', '68 up', '69 up', '70 up', '71 up', '72 up', '73 up', '74 up', '75 up', '76 up', '77 up'];
//
//
//cardDescription_rev = ['0 rev', '1 rev', '2 rev', '3 rev', '4 rev', '5 rev', '6 rev', '7 rev', '8 rev', '9 rev', '10 rev', '11 rev', '12 rev', '13 rev', '14 rev', '15 rev', '16 rev', '17 rev', '18 rev', '19 rev', '20 rev', '21 rev', '22 rev', '23 rev', '24 rev', '25 rev', '26 rev', '27 rev', '28 rev', '29 rev', '30 rev', '31 rev', '32 rev', '33 rev', '34 rev', '35 rev', '36 rev', '37 rev', '38 rev', '39 rev', '40 rev', '41 rev', '42 rev', '43 rev', '44 rev', '45 rev', '46 rev', '47 rev', '48 rev', '49 rev', '50 rev', '51 rev', '52 rev', '53 rev', '54 rev', '55 rev', '56 rev', '57 rev', '58 rev', '59 rev', '60 rev', '61 rev', '62 rev', '63 rev', '64 rev', '65 rev', '66 rev', '67 rev', '68 rev', '69 rev', '70 rev', '71 rev', '72 rev', '73 rev', '74 rev', '75 rev', '76 rev', '77 rev'];


cardDescription_up = ['Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.', 'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.', 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.', 'Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.', 'Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.', 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.', 'Attraction, love, beauty, trials overcome.', 'Succour, providence also war, triumph, presumption, vengeance, trouble.', 'Power, energy, action, courage, magnanimity; also complete success and honours.', 'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.', 'Destiny, fortune, success, elevation, luck, felicity.', 'Equity, rightness, probity, executive; triumph of the deserving side in law.', 'Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.', 'End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.', 'Economy, moderation, frugality, management, accommodation.', 'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.', 'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.', 'Loss, theft, privation, abandonment; another reading says-hope and bright prospects.', 'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.', 'Material happiness, fortunate marriage, contentment.', 'Change of position, renewal, outcome. Another account specifies total loss though lawsuit.', 'Assured success, recompense, voyage, route, emigration, flight, change of place.', '22 up', '23 up', '24 up', '25 up', '26 up', '27 up', '28 up', '29 up', '30 up', '31 up', '32 up', '33 up', '34 up', '35 up', '36 up', '37 up', '38 up', '39 up', '40 up', '41 up', '42 up', '43 up', '44 up', '45 up', '46 up', '47 up', '48 up', '49 up', '50 up', '51 up', '52 up', '53 up', '54 up', '55 up', '56 up', '57 up', '58 up', '59 up', '60 up', '61 up', '62 up', '63 up', '64 up', '65 up', '66 up', '67 up', '68 up', '69 up', '70 up', '71 up', '72 up', '73 up', '74 up', '75 up', '76 up', '77 up'];


cardDescription_rev = ['Negligence, absence, distribution, carelessness, apathy, nullity, vanity.', 'Physician, Magus, mental disease, disgrace, disquiet.', 'Passion, moral or physical ardour, conceit, surface knowledge.', 'Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.', 'Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.', 'Society, good understanding, concord, overkindness, weakness.', 'Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.', 'Riot, quarrel, dispute, litigation, defeat.', 'Despotism, abuse if power, weakness, discord, sometimes even disgrace.', 'Concealment, disguise, policy, fear, unreasoned caution.', 'Increase, abundance, superfluity.', 'Law in all its departments, legal complications, bigotry, bias, excessive severity.', 'Selfishness, the crowd, body politic.', 'Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.', 'Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.', 'Evil fatality, weakness, pettiness, blindness.', 'According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.', 'Arrogance, haughtiness, impotence.', 'Instability, inconstancy, silence, lesser degrees of deception and error.', 'Material happiness, fortunate marriage, contentment, but in a lesser sense as when card upright.', 'Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.', 'Inertia, fixity, stagnation, permanence.', '22 rev', '23 rev', '24 rev', '25 rev', '26 rev', '27 rev', '28 rev', '29 rev', '30 rev', '31 rev', '32 rev', '33 rev', '34 rev', '35 rev', '36 rev', '37 rev', '38 rev', '39 rev', '40 rev', '41 rev', '42 rev', '43 rev', '44 rev', '45 rev', '46 rev', '47 rev', '48 rev', '49 rev', '50 rev', '51 rev', '52 rev', '53 rev', '54 rev', '55 rev', '56 rev', '57 rev', '58 rev', '59 rev', '60 rev', '61 rev', '62 rev', '63 rev', '64 rev', '65 rev', '66 rev', '67 rev', '68 rev', '69 rev', '70 rev', '71 rev', '72 rev', '73 rev', '74 rev', '75 rev', '76 rev', '77 rev'];



$ = jQuery;



$(document).ready(function() {
  var put_card_in_spread;
    
//  $(':input').focus(function() {
//    return $(this).addClass('ui-state-hover');
//  }).blur(function() {
//    return $(this).removeClass('ui-state-hover');
//  });
//    
//  $(':selected').focus(function() {
//    return $(this).addClass('ui-state-hover');
//  }).blur(function() {
//    return $(this).removeClass('ui-state-hover');
//  });
    

//hides initial card image for '#cardProto' under "add card" button. #cardProto = ID SELECTOR
  $('#cardProto').data('card', 0).data('reversed', 0).hide();
    
//hides initial card image for '#cardPosition' under "add card" button. #cardPosition = ID SELECTOR   
  $('#cardPosition').hide();
    
//code for dialog box appearing after "turn cards" button clicked. #dialogTurnCardsResult = ID SELECTOR
  $('#dialogTurnCardsResult').dialog({
    bgiframe: true,
    autoOpen: false,
    width: 600,
    buttons: {
      Ok: function() {
        return $(this).dialog('close');
      }
    }
  });
    
//code for dialog box appearing after "redraw cards" button clicked. #dialogRedrawCards = ID SELECTOR
  $('#dialogRedrawCards').dialog({
    bgiframe: true,
    autoOpen: false,
    resizable: false,
    modal: true,
    buttons: {
      Cancel: function() {
        return $(this).dialog('close');
      },
      Ok: function() {
        $(this).dialog('close');
        $('#shuffle').trigger('click');
        $('#spreadArea').children('div').each(function() {
          $(this).has('p').children('div:first').height(cardHeight * 0.45);
          if ($(this).data('cardMeaning')) {
            $(this).has('p').append('<span>' + $(this).data('cardMeaning') + '</span>');
          } else {
            $(this).has('p').append('<span></span>');
          }
          return $(this).removeClass('ui-state-highlight').css('backgroundImage', '').data('card', '').data('reversed', '').data('name', '').children('p').remove();
        });
        $('#turnCards').hide();
        return $('#redrawCards').hide();
      }
    }
  });
    
//PART1 code for dialog box appearing after "reset spread area" button clicked    
  $('#dialogResetSpreadArea').dialog({
    bgiframe: true,
    autoOpen: false,
    resizable: false,
    modal: true,
    buttons: {
      Cancel: function() {
        return $(this).dialog('close');
      },
      Ok: function() {
        $(this).dialog('close');
        $('#shuffle').trigger('click');
        $('#spreadArea').children().remove().data('left', $('#spreadArea').position().left).data('cardSN', 0).data('cardMeaningSet', false);
        return $('#turnCards').hide();
      }
    }
  });
    
//adds card from shuffled deck to "spread area" after card from shuffled deck clicked    
  put_card_in_spread = function(position, card) {
    var dropped;
    dropped = false;
    $("#spreadArea .droppable").each(function() {
      if ($(this).data('card') != null) {
        if ($(this).data('card') === card.data('card')) {
          return dropped = true;
        }
      }
    });
    if (dropped) {
      return;
    }
    $("#turnCards").show();
    $("#redrawCards").show();
    position.addClass('ui-state-highlight').data('card', card.data('card')).data('reversed', card.data('reversed')).data('name', cardName[position.data("card")]);
      
//    position.addClass('ui-state-highlight').data('card', card.data('card')).data('reversed', card.data('reversed')).data('name', cardDescription[position.data("card")]);
      
    if (card.data('reversed') === 0) {
      position.data('name', position.data('name') + '（upright）');
    } else {
      position.data('name', position.data('name') + '（reversed）');
    }
    return card.fadeOut('fast');
  };
    
    
    
//shuffles deck when "shuffle" button clicked    
  $('#shuffle').click(function() {
    var cards, i, i_temp, j, k, l, ref, ref1, ref2, ref3, results, swp, t, tmp_card, u;
    $("#deck").children().remove();
    $("#dialogResetSpreadArea").dialog('close');
    if ($('#mode').attr("value") === "major") {
      l = 0;
      u = 22;
    } else if ($('#mode').attr("value") === "minor") {
      l = 22;
      u = 78;
    } else {
      l = 0;
      u = 78;
    }
    cards = new Array();
    for (i = j = ref = l, ref1 = u; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
      i_temp = i;
      cards[i - l] = i_temp;
      if (i > 0) {
        swp = Math.floor(Math.random() * (i - l));
        t = cards[swp];
        cards[swp] = i_temp;
        cards[i - l] = t;
      }
    }
    results = [];
    for (i = k = ref2 = l, ref3 = u; ref2 <= ref3 ? k < ref3 : k > ref3; i = ref2 <= ref3 ? ++k : --k) {
      tmp_card = $("#cardProto").clone(true);
      tmp_card.attr("id", tmp_card.attr("id") + serialNumber);
      serialNumber += 1;
      tmp_card.data("card", cards[i - l]).draggable({
        grid: [gridSize, gridSize],
        start: function() {
          return $(this).data("dragged", true);
        },
        stop: function() {
          return $(this).data("dragged", false);
        }
      }).mouseover(function() {
        return $(this).addClass('ui-state-highlight');
      }).mouseout(function() {
        return $(this).removeClass('ui-state-highlight');
      }).mouseup(function() {
        var empty_position;
        if ($(this).data("dragged")) {
          return;
        }
        empty_position = [];
        $("#spreadArea .droppable").each(function() {
          if (($(this).data("card") == null) || $(this).data("card") === '') {
            return empty_position.push($(this));
          }
        });
        return put_card_in_spread(empty_position[0], $(this));
      }).css({
        position: 'absolute',
        left: $("#deck").position().left + (i - l) * gridSize,
        top: $("#deck").position().top
      });
      if ($("#canReverse").attr("value") === "true") {
        tmp_card.data("reversed", Math.floor(Math.random() + 0.5));
      } else {
        tmp_card.data("reversed", 0);
      }
      tmp_card.css('z-index', 80 + i);
      $("#deck").append(tmp_card);
      results.push(tmp_card.show("slow"));
    }
      
      
    console.log (results);
    return results;
  });
    
    
    
    
//  $("#spreadArea").data("right", $("#spreadArea").position().right);
    
    
    
//appends card number to "spread area" text appearing on cards under "add card" button, via ".data('cardSN', 0)", where 'cardSN'=card number variable to which a value of 0 is initially applied, and '0'=starting number to which increments of +1 are added to.    
  $("#spreadArea").data('cardSN', 0);
    
    
    
//apparently not needed? -->is needed when cardMeaningSet = true
  $("#spreadArea").data('cardMeaningSet', true);
    
    
    
//PART2 code for dialog box appearing after "reset spread area" button clicked    
  $("#resetSpreadArea").click(function() {
    $("#dialogTurnCardsResult").dialog('close');
    $("#dialogRedrawCards").dialog('close');
    return $("#dialogResetSpreadArea").text('#dialogResetSpreadArea').dialog('open');
  }).hide();
    
    
    
//adds card to 'spread area' when "add card" button clicked    
  $('#addCard').click(function() {
    var new_card;
    $('#resetSpreadArea').show();
    $('#spreadArea').data('cardSN', $('#spreadArea').data('cardSN') + 1);
    new_card = $('#cardPosition').clone(true);
    new_card.attr("id", new_card.attr("id") + serialNumber);
    new_card.html('<span>card # ' + $("#spreadArea").data('cardSN') + '</span>');
    new_card.prepend('<div style="height: ' + cardHeight * 0.45 + 'px;"></div>');
      
// allows you to doubleclick on card, and input text field, but seems irrelevant...
//    new_card.dblclick(function() {
//      var prevValue, span, span_text, strForm;
//      span = $(this).children('span:first');
//      prevValue = span.text();
//      strForm = '<input type="text" style="width: ' + new_card.width() * 0.8 + 'px;" /> ';
//      span.html(strForm);
//      span_text = span.children('input:first');
//      return span_text.attr('value', prevValue).keypress(function(event) {
//        var $container;
//        if (event.which === '13') {
//          $container = $(this).parent();
//          $container.text($(this).attr('value'));
//          $container.parent().data('cardMeaning', $(this).attr('value'));
//          return $("#spreadArea").data('cardMeaningSet', true);
//        }
//      }).focus();
//    });
      
      
    serialNumber += 1;
    new_card.draggable({
      grid: [gridSize, gridSize]
    }).droppable({
      hoverClass: 'ui-state-active',
      accept: '.draggable',
      drop: function(event, ui) {
        return put_card_in_spread($(this), ui.draggable);
      }
    }).css({
      position: 'absolute',
      left: $("#spreadArea").data("left"),
      top: $("#spreadArea").position().top
    }).show();
    $("#spreadArea").append(new_card);
    return $("#spreadArea").data("left", new_card.position().left + cardWidth + gridSize);
  });
    
    
    
    
    
    
//  $("#turnCards").hide();
    
    
  $("#turnCards").click(function() {
    var cardStr;
    cardStr = 'shtdslkfjdslldskfj';
    $("#spreadArea").children(".droppable").each(function() {
      var url;
      if ($("#spreadArea").data('cardMeaningSet')) {
        if (cardStr !== '') {
          cardStr += '<br />';
        }
        if (!$(this).data('cardMeaning')) {
          $(this).data('cardMeaning', $(this).children('span:first').text());
        }
          
        card_descr = $(this).data("card");
          
        if ($(this).data("reversed") === 1) {
            
        cardStr += $(this).data('cardMeaning') + ' : ' + $(this).data('name') + cardDescription_rev[card_descr]}
          else
        {
            
        cardStr += $(this).data('cardMeaning') + ' : ' + $(this).data('name') + cardDescription_up[card_descr];}
            
        console.log(cardStr);
        
      } else {
        if (cardStr !== '') {
          cardStr += 'ooo';
        }
          
          
        //sets callout for 'turn cards result' to the card's name. how is 'name' defined?
        cardStr += $(this).data('name');
          
          
      }
        
      $(this).html('<div style="height: ' + (cardHeight + gridSize * 0.5) + 'px;"></div><p>' + $(this).data('name') + '</p>');
      url = 'url(cardimg/%cardid%.jpg)';
      if ($(this).data("reversed") === 1) {
        url = 'url(cardimg/%cardid%r.jpg)';
      }
      if ($(this).data("card") < 10) {
        url = url.replace('%cardid%', '0' + $(this).data("card"));
      } else {
        url = url.replace('%cardid%', $(this).data("card"));
      }
        
      card_descr = $(this).data("card");
      console.log(card_descr);
        
      return $(this).css('backgroundImage', url);
      
      
      
    });
      
    
      
    return $("#dialogTurnCardsResult").html("<p>#dialogTurnCardsResultxxxx：</p><p>" + cardStr + "</p>").dialog('open');
      
    
  });
    
    
    
  $("#redrawCards").click(function() {
    $("#dialogTurnCardsResult").dialog('close');
    $("#dialogResetSpreadArea").dialog('close');
    return $("#dialogRedrawCards").text('#dialogRedrawCards').dialog('open');
  }).hide();
  return $(window).load(function() {
    var i, j, results;
    results = [];
    for (i = j = 1; j <= 0; i = ++j) {
      results.push($('#addCard').trigger('click'));
    }
    console.log (results);
//    console.log (empty_position);
    return results;
    
  });
});

