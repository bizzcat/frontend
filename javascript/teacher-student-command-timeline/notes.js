```
Notes:

Getting html into the tooltip was challenging, even with html set to true it only
    accepts html in string format. This makes it challenging to add event
    listers to the "(and X more)" element. So I bypassed it using this:
        var namesAboveSixTempString = "<h6 class='above-six-length'>(and " +
        namesAboveSix.length + " more) </h6> <h6 class='above-six' style='display:
        none;'> " + namesAboveSixString + "</h6>";

    Normally this would be quite easy with
    a function similar to this:
        studentNamesTempString.click(function() {
            $(this) = [studentNamesBelowSixString, studentNamesAboveSixString].join(', ')
          })

This also required that I add the text via string format like this:
    '<h4>' + command["commandName"] + '</h4>'

A slightly verbose solution to all of this (http://stackoverflow.com/questions/15734105/jquery-ui-tooltip-does-not-support-html-content)
    yet if I were to fix this it would open up the code for an XSS vulnerability.
    Probably okay in this excercise, but I'm not sure what a security oriented
    enterprise's workaround would be.

FontAwesome images are a smidge small. If I set the them to other sizes using their
    style guide '-2x' it would display empty boxes. I believe it is due to my browser.

I began setting up a form for command submission, but decided on brevity instead ;)

Bootstrap is betetr than qTip for tooltip generation. Less moving parts and
    better documentation. However, qTip allows for adjusting the location of
    tooltip display and arrow location, whereas Bootstrap does not.

One way of generating this form without tooltips is through appending hidden
    section containg the command text next to the circular nodes, and reveling
    them upon click. Example function using this approach:

    var commandSection = $('<section></section>')
    commandSection.append($('<p></p>').append(commandTime))
      .append($('<p></p>').append(fontAwesome))
      .append(commandTextBox)

    fontAwesome.click(function(command) {
      $('.command').removeClass('show');
      commandTextBox.addClass('show');
    })

    $('#session-1').prepend(commandSection)


Another approach would be to have each command listing be a listitem <li>, with
    li:before containing the time of command, the li bullet being replaced with
    the FontAwesome icon, and the item content being the command content
```
