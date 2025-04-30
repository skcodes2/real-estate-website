export default function BurgerMenu({ size = 24, color = '#fff' }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 80"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: 'pointer' }}
      >
        <rect width="100" height="15" rx="8"></rect>
        <rect y="30" width="100" height="15" rx="8"></rect>
        <rect y="60" width="100" height="15" rx="8"></rect>
      </svg>
    );
  }
  