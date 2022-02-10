import { styled } from "@mui/system";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

export const Tab = styled(TabUnstyled)(({ theme }) => `
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: ${theme.palette.background.main};
  width: 100%;
  border: none;
  padding: 16px;
  border-radius: 30px;
  min-width: 200px;
  text-transform: uppercase;
  &.${tabUnstyledClasses.selected} {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.secondary.main}
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);

export const TabsList = styled(TabsListUnstyled)(({ theme }) => `
  max-width: 500px;
  background-color: ${theme.palette.background.main};
  border-radius: 30px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`);
