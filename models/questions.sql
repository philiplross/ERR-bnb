use project_db1;
ALTER TABLE qyestions

ADD COLUMN questionOne VARCHAR
(100) NOT NULL,
ADD COLUMN questionTwo VARCHAR
(100) NOT NULL,
ADD COLUMN  questionThree VARCHAR
(100) NOT NULL,

ADD COLUMN  questionFour VARCHAR
(100) NOT NULL,

ADD COLUMN  questionFive VARCHAR
(100) NOT NULL,

ADD COLUMN  questionSix VARCHAR
(100) NOT NULL,

ADD COLUMN  questionSeven VARCHAR
(100) NOT NULL,

ADD COLUMN questionEight VARCHAR
(100) NOT NULL,

ADD COLUMN  questionTen VARCHAR
(100) NOT NULL


SELECT *
FROM project_db1.qyestions;
INSERT INTO qyestions
    (questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen)
VALUES
    ('What is your budget for this trip?',
        'Do you like staying alone, or enjoy the livelyness of a bed and breakfast?',
        'Would you rather sit in the warm sun, or look at pretty seasons with a jacket?',
        'when traveleing somewhere, whats the first thing you do when you get there?',
        'Would you say this trip you wanna be a foodie, or stick to a diet and get some excerise?',
        'when you stay somewhere whats more inportant, artistic & history, or comnfort & ritz?',
        'to be determined',
        'are you a big sports fan and would see a local game?',
        'if you were able to endulge would you rather drink a nice cocktail, or smoke a smooth rolled joint?',
        'to be determined');


