import "jest-canvas-mock";
import styled from 'styled-components/macro';

const {
    getRandomWord,
    updateScore,
    updateTime,
    gameOver
  } = require('../script.js');
  
  describe('getRandomWord', () => {
    test('returns a random word from the words array', () => {
      const words = ['sigh', 'tense', 'airplane', 'ball'];
      const randomWord = getRandomWord(words);
      expect(words).toContain(randomWord);
    });
  });
  
  describe('updateScore', () => {
    test('increments the score', () => {
      let score = 0;
      updateScore(score);
      expect(score).toBe(1);
    });
  });
  
  describe('updateTime', () => {
    test('decrements the time', () => {
      let time = 10;
      updateTime(time);
      expect(time).toBe(9);
    });
  });
  
  describe('gameOver', () => {
    test('displays the game over message', () => {
      const endgameMessage = gameOver();
      expect(endgameMessage).toContain('Time ran out');
    });
  });
  