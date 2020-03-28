document.addEventListener('DOMContentLoaded', () => {

  /* 
  Declarations
  */
  //

  /* 
  Functions
  */
      const getFeelingValue = (titleTag, title, listItem, emotionRange) => {
          // Set title
          titleTag.textContent = title;

          // Loop on list item
          for( let i = 0; i < listItem.length; i++ ){
              // Get item
              const item = listItem[i];

              // Get click event on eeach item
              item.addEventListener('click', () => {
                  // Set feeling
                  feelingActivation(title, listItem, emotionRange, i);
              })
          }
      }

      const feelingActivation = (title, listItem, emotionRange, index) => {
          // Loop on list item to delete class
          for( let i = 0; i < listItem.length; i++ ){
              // Remove class active
              listItem[i].classList.remove('active');
          }

          // Loop on list item to add class
          for( let i = 0; i <= index; i++ ){
              // Remove class active
              listItem[i].classList.add('active');
          }

          // Edit emotion range size
          let rangeSize = (index + 1) * 10;
          emotionRange.style.width = rangeSize + '%';

          // Set emotion range
          localStorage.setItem( title, index );
      }
  //

  /* 
  Start interface
  */
      getFeelingValue(
          document.querySelector('#joy h2'), 
          'joie',
          document.querySelectorAll('#joy li'), 
          document.querySelector('#joy .emotionRange')
      );

      getFeelingValue(
          document.querySelector('#excitation h2'), 
          'excitation',
          document.querySelectorAll('#excitation li'), 
          document.querySelector('#excitation .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#fun h2'), 
        'amusement',
        document.querySelectorAll('#fun li'), 
        document.querySelector('#fun .emotionRange')
      );

      getFeelingValue(
      document.querySelector('#anger h2'), 
      'colère',
      document.querySelectorAll('#anger li'), 
      document.querySelector('#anger .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#desire h2'), 
        'désir',
        document.querySelectorAll('#desire li'), 
        document.querySelector('#desire .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#uncomfortable h2'), 
        'embarras',
        document.querySelectorAll('#uncomfortable li'), 
        document.querySelector('#uncomfortable .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#boredom h2'), 
        'ennui',
        document.querySelectorAll('#boredom li'), 
        document.querySelector('#boredom .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#serenity h2'), 
        'sérénité',
        document.querySelectorAll('#serenity li'), 
        document.querySelector('#serenity .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#nostalgia h2'), 
        'nostalgie',
        document.querySelectorAll('#nostalgia li'), 
        document.querySelector('#nostalgia .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#fear h2'), 
        'peur',
        document.querySelectorAll('#fear li'), 
        document.querySelector('#fear .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#anxiety h2'), 
        'anxiété',
        document.querySelectorAll('#anxiety li'), 
        document.querySelector('#anxiety .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#sadness h2'), 
        'tristesse',
        document.querySelectorAll('#sadness li'), 
        document.querySelector('#sadness .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#satisfaction h2'), 
        'satisfaction',
        document.querySelectorAll('#satisfaction li'), 
        document.querySelector('#satisfaction .emotionRange')
      );

      getFeelingValue(
        document.querySelector('#disgust h2'), 
        'dégoût',
        document.querySelectorAll('#disgust li'), 
        document.querySelector('#disgust .emotionRange')
      );
  //
})