import { render ,screen} from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

describe('Button', () => {
    test('button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass("clear")
    });
    
});
