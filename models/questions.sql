


-- NEW QUESTION SYNTAX TABLE and new SAN DIEGO based questions

use project_db1;

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 1, 'What is your budget for this trip?', NULL)

use project_db1;

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 2, 'Do you like staying alone, or enjoy the livelyness of a bed and breakfast?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 3, 'Would you rather wake up to the sights of the ocean or not a deal breaker?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 4, 'when traveleing somewhere, whats the first thing you do when you get there?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 5, 'Would you say this trip you wanna be a foodie, or stick to a diet and get some excerise?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 6, 'when you stay somewhere whats more inportant, artistic & history, or comnfort & ritz?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 7, 'When treveling wich if the folling intrest you?', NULL)
-- multiple choice radio button to show with the following choices: food, museums, surfing, fishing, seeing wilderness, exploring downtown, sailing, shopping, seeing a play, ect


INSERT INTO questions (questionID, question, users_answer)
VALUES ( 8, '', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 9, '', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 10, '', NULL)












-- OLD SQL SYNTAX for old DB but keeping code for backup

-- use project_db1;
-- ALTER TABLE qyestions

-- ADD COLUMN questionOne VARCHAR
-- (100) NOT NULL,
-- ADD COLUMN questionTwo VARCHAR
-- (100) NOT NULL,
-- ADD COLUMN  questionThree VARCHAR
-- (100) NOT NULL,

-- ADD COLUMN  questionFour VARCHAR
-- (100) NOT NULL,

-- ADD COLUMN  questionFive VARCHAR
-- (100) NOT NULL,

-- ADD COLUMN  questionSix VARCHAR
-- (100) NOT NULL,

-- ADD COLUMN  questionSeven VARCHAR
-- (100) NOT NULL,

-- ADD COLUMN questionEight VARCHAR
-- (100) NOT NULL,

-- ADD COLUMN  questionTen VARCHAR
-- (100) NOT NULL


-- SELECT *
-- FROM project_db1.qyestions;
-- INSERT INTO qyestions
--     (questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen)
-- VALUES
--     ('What is your budget for this trip?',
--         'Do you like staying alone, or enjoy the livelyness of a bed and breakfast?',
--         'Would you rather sit in the warm sun, or look at pretty seasons with a jacket?',
--         'when traveleing somewhere, whats the first thing you do when you get there?',
--         'Would you say this trip you wanna be a foodie, or stick to a diet and get some excerise?',
--         'when you stay somewhere whats more inportant, artistic & history, or comnfort & ritz?',
--         'to be determined',
--         'are you a big sports fan and would see a local game?',
--         'if you were able to endulge would you rather drink a nice cocktail, or smoke a smooth rolled joint?',
--         'to be determined');











