
//Unit testing

let numbArr = [88.61, 65.21, 33.03]
let toneArr = ['Joy','Anger', 'Fear' ]
let color = 'rgba(255,255,255,0)';


let colorPicker = (numbs, watsonTone) =>{
  let color = '';
  console.log(numbs);
  for(let i =0; i < numbs.length; i++){
      var max = Math.max(...numbs);
      var sameIndex = numbs.indexOf(max);
  }
  
  console.log(watsonTone[sameIndex]);
  switch (watsonTone[sameIndex]) {
      case 'Anger':
      console.log('I am Angry.');
      color = `rgba(255, 0, 0, ${max})`;
      break;
      case 'Fear':
      console.log('I am Fearful.');
      color = `rgba(0, 0, 0, ${max})`;            
      break;
      case 'Joy':
      console.log('I am Joyful.');
      color = `rgba(255, 255, 0, ${max})`;
      break;
      case 'Sadness':
      console.log('I am Sad.');
      color = `rgba(0, 0, 255, ${max})`;
      break;
      case 'Analytical':
      console.log('I am Analytical.');
      color = `rgba(255, 128, 0, ${max})`;
      break;
      case 'Confident':
      console.log('I am Confident.');
      color = `rgba(127, 0, 255, ${max})`;
      break;
      case 'Tentative':
      console.log('I am Tentative.');
      color = `rgba(128, 128, 128, ${max})`;
      break;
      default:
      console.log('Sorry, we are out of emotions');
  } return watsonTone[sameIndex];
}; 
  colorPicker(numbArr, toneArr);

  describe('test', function(){
    it('should get highest number', function() {
  //  console.log('Hello', numbArr, "goodbye", toneArr)
      
      expect(colorPicker(numbArr, toneArr)).to.equal('Joy')
  })
  it('should find highest', function() {
    let numbArr2 = [65.21, 88.61, 33.03]
    let toneArr2 = ['Joy','Anger', 'Fear']
        
        expect(colorPicker(numbArr2, toneArr2)).to.equal('Anger')
    })
    it('should return first only', function() {
      let numbArr3 = [88.61, 88.61, 33.03]
      let toneArr3 = ['Confident','Anger', 'Joy']
          
          expect(colorPicker(numbArr3, toneArr3)).to.equal('Confident')
      })
      it('empty numb should return undefined', function() {
        let numbArr4 = []
        let toneArr4 = ['Joy','Anger', 'Fear']
            
            expect(colorPicker(numbArr4, toneArr4)).to.equal(undefined)
        })
        it('empty tone should find undefined', function() {
          let numbArr2 = [65.21, 88.61, 33.03]
          let toneArr2 = []
              
              expect(colorPicker(numbArr2, toneArr2)).to.equal(undefined)
          })
});
//functional testing

const Url = 'http://localhost:3000/'
const profileUrl = 'http://localhost:3000/profile'
const mapUrl = 'http://localhost:3000/map'


describe('testing urls', function(){
    it('should take us to home', function() {
cy.visit(Url)
    })
    it('should take us to profile', function() {
cy.visit(profileUrl)
    })
    it('should take us to map', function() {
cy.visit(mapUrl)
    })
  });

  describe('testing navbar', function(){
    it('should take us to profile', function() {
cy.visit(Url)
    cy.get('.checkEmotions').click()
    cy.url().should('include', '/profile')
  })
  it('should take us to map', function() {
cy.visit(Url)
    cy.get('.checkMap').click()
    cy.url().should('include', '/map')
  })
});