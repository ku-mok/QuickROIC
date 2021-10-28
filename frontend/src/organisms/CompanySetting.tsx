import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Chip, List, ListItem, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { SketchPicker, SketchPickerProps } from "react-color";
import { useModal } from "../page/hooks";

export type CompanySettingProps = {
  companies: {
    name: string;
    color: string;
    visibility: boolean;
    setVisibility: (visibility: boolean) => void;
    setColor: (color: string) => void;
  }[];
};
function blackOrWhite(hexColor: string): string {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "white" : "black";
}
const CompanySetting: React.FC<CompanySettingProps> = (props) => {
  const { modalOpen, handleModalOpen, handleModalClose } = useModal();
  // react-colorに表示している色
  const [color, setColor] = useState("#ffffff");
  const handleColorChange: SketchPickerProps["onChange"] = (color, _) => {
    setColor(color.hex);
    props.companies[focusedCompanyIndex].setColor(color.hex);
  };
  // react-colorで変更する対象の企業の色変更のハンドラ
  const [focusedCompanyIndex, setFocusedCompanyIndex] = useState(0);
  return (
    <>
      <List>
        {props.companies.map((c, i) => (
          <ListItem key={c.name}>
            <Chip
              label={c.name}
              onClick={() => {
                handleModalOpen();
                setColor(c.color);
                setFocusedCompanyIndex(i);
              }}
              onDelete={() => c.setVisibility(!c.visibility)}
              deleteIcon={c.visibility ? <Visibility /> : <VisibilityOff />}
              sx={{
                background: c.visibility ? c.color : "silver",
                color: c.visibility ? blackOrWhite(c.color) : "black",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div
          style={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
      </Modal>
    </>
  );
};
export default CompanySetting;
