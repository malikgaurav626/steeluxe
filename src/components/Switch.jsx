import styled from "styled-components";
import { ThemeContext } from "../ThemeContext.jsx";
import { useContext } from "react";

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <StyledWrapper
      onMouseDown={() => {
        toggleTheme();
      }}
    >
      <label className="switch">
        <input type="checkbox" />
        <span className="slider">
          <span className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={22}
              height={22}
              x={0}
              y={0}
              viewBox="0 0 32 32"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
              className="sun"
            >
              <g>
                <circle
                  cx={16}
                  cy={16}
                  r="8.312"
                  fill="currentColor"
                  data-original="#000000"
                />
                <path
                  d="M31.72 16.706a1.03 1.03 0 0 0 0-1.413l-2.816-3.023a1.037 1.037 0 0 1-.28-.831l.509-4.104c.072-.54-.291-1.05-.832-1.153l-4.062-.78a1.035 1.035 0 0 1-.707-.519l-1.994-3.616a1.037 1.037 0 0 0-1.35-.436l-3.751 1.756c-.27.125-.603.125-.873-.01L11.814.83a1.037 1.037 0 0 0-1.351.436L8.468 4.883c-.146.27-.406.457-.707.52L3.7 6.182c-.54.104-.904.613-.831 1.153l.509 4.104c.03.301-.063.602-.28.831L.28 15.293a1.03 1.03 0 0 0 0 1.413l2.815 3.024c.218.228.312.53.28.831l-.508 4.104c-.073.54.29 1.05.83 1.153l4.063.78c.301.062.561.249.707.519l1.994 3.615c.27.478.863.676 1.351.437l3.75-1.756c.27-.125.603-.125.873.01l3.751 1.746c.488.239 1.08.041 1.35-.437l1.995-3.615c.146-.27.406-.457.707-.52l4.062-.779c.54-.104.904-.613.832-1.153l-.51-4.104a1.037 1.037 0 0 1 .28-.831l2.816-3.023zM16 26.39c-5.725 0-10.39-4.665-10.39-10.39S10.275 5.61 16 5.61 26.39 10.275 26.39 16 21.725 26.39 16 26.39z"
                  fill="currentColor"
                  data-original="#000000"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
              height={22}
              width={22}
              className="moon"
            >
              <g clipPath="url(#clip0_68_17)">
                <path
                  fill="currentColor"
                  d="M355.2 142.08C355.2 162.133 338.773 178.56 318.72 178.56C298.667 178.56 282.453 162.133 282.453 142.08C282.453 122.027 298.667 105.813 318.72 105.813C338.773 105.813 355.2 122.027 355.2 142.08Z"
                />
                <path
                  fill="currentColor"
                  d="M151.253 283.52C142.72 283.52 135.893 290.347 135.893 298.88C135.893 307.413 142.72 314.453 151.253 314.453C159.787 314.453 166.613 307.413 166.613 298.88C166.613 290.347 159.787 283.52 151.253 283.52ZM151.253 283.52C142.72 283.52 135.893 290.347 135.893 298.88C135.893 307.413 142.72 314.453 151.253 314.453C159.787 314.453 166.613 307.413 166.613 298.88C166.613 290.347 159.787 283.52 151.253 283.52ZM501.12 271.147C495.573 268.8 491.947 263.253 491.947 257.067C491.947 250.88 495.573 245.333 501.12 242.987C507.947 240.213 511.787 233.387 510.933 226.347C495.573 97.4933 385.92 0.213318 256 0.213318C197.547 0.213318 142.72 19.4133 97.2799 55.4667C91.7333 59.9467 89.8133 67.6267 92.5866 74.4533C93.2266 75.52 93.4399 77.0133 93.4399 79.1467C93.4399 87.4667 86.3999 94.5066 78.0799 94.5066C75.9466 94.5066 74.4533 94.2933 73.3866 93.6533C70.1379 92.2903 66.5363 92.0107 63.1161 92.8562C59.696 93.7016 56.6395 95.627 54.3999 98.3467C18.1333 143.787 -0.853394 198.613 -0.853394 257.067C-0.853394 398.72 114.347 513.92 256 513.92C385.92 513.92 495.573 416.64 510.933 287.787C511.367 284.318 510.64 280.804 508.864 277.793C507.089 274.782 504.365 272.445 501.12 271.147ZM151.253 346.453C125.227 346.453 103.893 325.12 103.893 298.88C103.893 272.853 125.227 251.52 151.253 251.52C177.493 251.52 198.613 272.853 198.613 298.88C198.613 325.12 177.493 346.453 151.253 346.453ZM318.72 430.08C292.693 430.08 271.36 408.96 271.36 382.72C271.36 356.48 292.693 335.36 318.72 335.36C344.96 335.36 366.293 356.48 366.293 382.72C366.293 408.96 344.96 430.08 318.72 430.08ZM318.72 210.56C281.173 210.56 250.453 179.84 250.453 142.08C250.453 104.533 281.173 73.8133 318.72 73.8133C356.48 73.8133 387.2 104.533 387.2 142.08C387.2 179.84 356.48 210.56 318.72 210.56ZM318.72 367.36C310.4 367.36 303.36 374.187 303.36 382.72C303.36 391.253 310.4 398.08 318.72 398.08C327.253 398.08 334.293 391.253 334.293 382.72C334.293 374.187 327.253 367.36 318.72 367.36ZM151.253 283.52C142.72 283.52 135.893 290.347 135.893 298.88C135.893 307.413 142.72 314.453 151.253 314.453C159.787 314.453 166.613 307.413 166.613 298.88C166.613 290.347 159.787 283.52 151.253 283.52Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_17">
                  <rect fill="currentColor" height={512} width={512} />
                </clipPath>
              </defs>
            </svg>
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* checkbox settings 👇 */

  .switch {
    /* global */
    --total_transition_duration: 0.3s;
    /* switch */
    --slider_width: 2.875em;
    --slider_height: 1.5em;
    --slider_light_bg: linear-gradient(90deg, #f32a85 0%, #f19d36 100%);
    --slider_night_bg: linear-gradient(90deg, #1701a1 0%, #af0693 75%);
    --slider_offset: calc((var(--slider_height) - var(--circle_diameter)) / 2);
    --slider_radius: calc(var(--slider_height) / 2);
    /* circle */
    --circle_diameter: 1.125em;
    --circle_rotation: 360deg;
    /* svg */
    --svg_width: var(--circle_diameter);
    --sun-color: #fff;
    --moon-color: #fff;
  }

  .switch input {
    display: none;
  }

  .slider svg {
    position: absolute;
    height: auto;
    color: var(--svg-color);
    transition: var(--total_transition_duration) ease;
    width: 100%;
  }

  .circle svg.sun {
    transform: scale(1);
    color: var(--sun-color);
  }

  .circle svg.moon {
    transform: scale(0);
    color: var(--moon-color);
    width: calc(100% - 2px);
  }

  .slider {
    display: inline-block;
    width: var(--slider_width);
    height: var(--slider_height);
    border-radius: var(--slider_radius);
    position: relative;
    cursor: pointer;
    transition: var(--total_transition_duration) ease;
    overflow: hidden;
  }

  .slider::before,
  .slider::after {
    content: "";
    position: absolute;
    inset: 0;
    transition: var(--total_transition_duration) ease;
  }

  /* ::before and ::after backgrounds are needed for smooth 
  transition of gradients otherwise there is no way :\ */
  .slider::before {
    opacity: 0;
    background: var(--slider_night_bg);
  }

  .slider::after {
    opacity: 1;
    background: var(--slider_light_bg);
  }

  /* ------------ */

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--circle_diameter);
    height: var(--circle_diameter);
    position: absolute;
    top: var(--slider_offset);
    left: var(--slider_offset);
    transition: var(--total_transition_duration) ease;
    z-index: 10;
  }

  /* actions */

  .switch input:checked + .slider::before {
    opacity: 1;
  }

  .switch input:checked + .slider::after {
    opacity: 0;
  }

  .switch input:active + .slider .circle {
    transform: scale(0.9);
  }

  .switch input:checked + .slider .circle {
    left: calc(100% - var(--circle_diameter) - var(--slider_offset));
  }

  .switch input:checked + .slider .sun {
    transform: scale(0) rotate(var(--circle_rotation));
  }

  .switch input:checked + .slider .moon {
    transform: scale(1) rotate(var(--circle_rotation));
  }
`;

export default Switch;
