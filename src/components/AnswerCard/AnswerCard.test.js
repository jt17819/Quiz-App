import {default as AnswerCard} from '.';
import { screen, render } from '@testing-library/react';
// import renderWithReduxProvider from './../../Test/setupTests';


describe('AnswerCard', () => {
    const resultStub = ['Snickers', 'Almond Joy', 'Twix', 'M&Ms']
    const setup = () => renderWithReduxProvider(<AnswerCard result={resultStub}/>)
    
    beforeEach(() => {
        
    });

    test('it shows correct answer in results', async () => {
      setup()
      const correct = await screen.findByText('Almond Joy')
      expect(correct).toBeInTheDocument();
    });

    test("it shows the incorrect answer in results", async () => {
        setup()
        const incorrectAnswer = await screen.findByText("Snickers");
        expect(incorrectAnswer).toBeInTheDocument();
    });

    test("it renders a button for the answer cards", () => {
        setup()
        let button = screen.getByRole("button", { name: /'next-button'/i });
        expect(button).toBeInTheDocument();
    });



    


})
