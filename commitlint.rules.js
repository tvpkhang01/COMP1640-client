module.exports = {
    'subject-pattern': (parsed, when) => {
      const isCorrectFormat = /^OT1-\d+: /.test(parsed.subject);
      if (!isCorrectFormat && when === 'always') {
        return [
          false,
          `Subject does not start with 'OT1-{number}: ' format`
        ];
      }
  
      if (isCorrectFormat && when === 'never') {
        return [
          false,
          `Subject should not start with 'OT1-{number}: ' format`
        ];
      }
  
      return [true];
    }
  };
  