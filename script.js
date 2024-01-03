let userSummary = {
    win: 0,
    loose: 0,
    totalPlayed: 0
};

function representText(ref_id, value) {
    document.querySelector(ref_id).innerText = value;
}

representText('#win', userSummary.win);
representText('#loose', userSummary.loose);
representText('#total', userSummary.totalPlayed);

function winnerFinder(user, system) {
    if (user == system)
        return 'Draw';
    else if ((user == 1 && system == 3) || (user == 2 && system == 1) || (user == 3 && system == 2)) {
        userSummary.win = userSummary.win + 1;
        representText('#win', userSummary.win);
        return 'Win';
    }
    else {
        userSummary.loose = userSummary.loose + 1;
        representText('#loose', userSummary.loose);
        return 'Loose';
    }
}

function clicked(event) {
    // take user input
    let userValue = event.value;
    representText('#user-input', event.innerText);
    // generate computer result
    let computerValue = Math.ceil(Math.random() * 3);
    // Increment total played count    
    userSummary.totalPlayed = userSummary.totalPlayed + 1;
    representText('#total', userSummary.totalPlayed);
    // Represent computer select result
    if (computerValue == 1) {
        representText('.computerInput', 'Stone');
    }
    else if (computerValue == 2)
        representText('.computerInput', 'Paper');
    else
        representText('.computerInput', 'Scissors');
    // Represent result
    representText('#finalResult', winnerFinder(userValue, computerValue));
}
