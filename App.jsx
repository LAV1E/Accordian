import React from 'react';
import Accordion from './components/Accordion';
const items = [
   {
      title: "What are accordian components?",
      content: "Accordian components are user interface elements used for organizing and presenting"
   },
   {
      title: "What are they used for?",
      content: "They are commonly employed in various contexts,including FAQs, product description."
   },
   {
      title: "Accordian as a musical instrument",
      content: "The accordian is a musical instrument with a keyboard and bellows."
   }
]
function App() {
   return (
      <div>
         <Accordion items={items} />
      </div>
   );
}
export default App;

