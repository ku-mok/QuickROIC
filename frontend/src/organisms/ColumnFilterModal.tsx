import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  ModalProps,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import styled from "styled-components";

export type ColumnFilterModalProps = {
  columns: string[];
  filter: string[] | undefined;
  handleFilterChange: (col: string | string[]) => void;
  open: boolean;
  onClose: ModalProps["onClose"];
};
const ModalContent = styled.div`
  background-color: white;
`;
const StyledModal = styled(Modal)`
  width: 50%;
  max-height: 50%;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  overflow: scroll;
`;
const FlexContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;
const ColumnFilterModal: React.FC<ColumnFilterModalProps> = (props) => {
  const handleAllUncheck = useCallback(() => {
    props.handleFilterChange(props.columns);
  }, [props]);
  const handleAllCheck = useCallback(() => {
    props.handleFilterChange([]);
  }, [props]);
  return (
    <StyledModal open={props.open} onClose={props.onClose}>
      <ModalContent>
        <FlexContainer>
          <Typography>表示するカラムを選択</Typography>
          <Button variant="contained" onClick={handleAllCheck}>
            全選択
          </Button>
          <Button variant="contained" onClick={handleAllUncheck}>
            全解除
          </Button>
        </FlexContainer>
        <List>
          {props.columns.map((col) => (
            <ListItem onClick={(e) => props.handleFilterChange(col)} key={col}>
              <ListItemIcon>
                {props.filter && props.filter.includes(col) ? (
                  <CheckBoxOutlineBlank />
                ) : (
                  <CheckBox />
                )}
              </ListItemIcon>
              <ListItemText primary={col} />
            </ListItem>
          ))}
        </List>
      </ModalContent>
    </StyledModal>
  );
};
export default ColumnFilterModal;
