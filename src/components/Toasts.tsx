import styled from 'styled-components';

// Success toast for copy actions
export const Toast = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'show',
})<{ show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(100px)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Mobile warning toast for small devices
export const MobileWarningToast = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'show',
})<{ show: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100px)')};
  background-color: #ff9800;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.3s ease;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 90vw;
  text-align: center;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;
