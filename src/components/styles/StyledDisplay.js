import styled from 'styled-components';

export const StyledDisplay = styled.div`
    background: black;
    display: block;
    position: relative;
    text-align: center;
    padding: 20px;
    max-width: 400px;
    font-family: 'Press Start 2P', cursive;
    text-decoration: none;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    font-size: ${props => (props.gameOver ? '2rem' : '1rem')};
    margin-top: 4rem;
    letter-spacing: 2px;

    overflow: hidden;
	/* Ensures the content is not revealed until the animation */
	white-space: nowrap;
	/* Keeps the content on a single line */
	margin: 0 auto;
	animation: typing 2.2s steps(25, end);

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
`;