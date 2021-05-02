import { render, screen } from '@testing-library/react';
import DomTreeFileView from '../index.js';
import {stringToHtmlDom} from "../DomTreeFileViewHelper";

test('renders dom tree as file system', () => {
	const htmlString=`<body>
  <p>
    Some Text
    <!-- A Comment -->
    More Text
  </p>
</body>`;

const domTree=stringToHtmlDom(htmlString);

  render(<DomTreeFileView domTree={domTree}/>);
  const textElement = screen.getByText(/Some Text/i);
  const textElement1 = screen.getByText(/More Text/i);
  expect(textElement).toBeInTheDocument();
  expect(textElement1).toBeInTheDocument();
});
