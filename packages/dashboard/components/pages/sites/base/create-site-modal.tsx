import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from "@chakra-ui/core";
import fetcher from "lib/fetcher";
import React, { FC, useState } from "react";
import { mutate } from "swr";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const CreateSiteModal: FC<IProps> = ({ onClose, isOpen }) => {
  const [siteName, setSiteName] = useState("");
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const response = await mutate(
        "/api/sites",
        await fetcher("/api/sites", "POST", { name: siteName })
      );

      setSiteName("");
      onClose();

      toast({
        position: "bottom-left",
        title: `${response.name} has been created.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Add new site</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={8}>
              <FormControl>
                <FormLabel>Site Name</FormLabel>
                <Input
                  placeholder="GitFlash"
                  value={siteName}
                  onChange={(e) => setSiteName(e.currentTarget.value)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack spacing={4} isInline>
              <Button onClick={onClose} colorScheme="red">
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Save</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CreateSiteModal;
