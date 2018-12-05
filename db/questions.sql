


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
VALUES ( 6, 'when you stay somewhere whats more important, artistic & history, or comnfort & ritz?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 7, 'When treveling wich if the folling intrest you?', NULL)
-- multiple choice radio button to show with the following choices: food, museums, surfing, fishing, seeing wilderness, exploring downtown, sailing, shopping, seeing a play, ect


INSERT INTO questions (questionID, question, users_answer)
VALUES ( 8, 'How amny people are you bringing on this trip or is it just Yourself?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 9, 'What dates are you planning to travel?', NULL)

INSERT INTO questions (questionID, question, users_answer)
VALUES ( 10, 'What is inportant to have close by in your neighborhood experience?', NULL)
-- have defining multtiple check boxes for the fooling to better filter down the neiborhood with each area have values to corilate with
-- Be trendy and hip / Have ethic grocery stores / Skate park nearby / a lot open 24 hours / Beach is nearby / good Sushi near by / Good mexican food near by / good for taking public transit / ect.












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











