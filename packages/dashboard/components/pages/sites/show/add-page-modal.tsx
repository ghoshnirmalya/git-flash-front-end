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
import ISite from "types/site";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
  site: ISite;
}

const AddPageModal: FC<IProps> = ({ onClose, isOpen, site }) => {
  const [pageUrl, setPageUrl] = useState("");
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const response = await mutate(
        "api/pages",
        await fetcher("api/pages", "POST", { url: pageUrl, siteId: site.id })
      );

      setPageUrl("");
      onClose();

      toast({
        position: "bottom-left",
        title: `${response.url} has been created.`,
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
          <ModalHeader>Add new url</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={8}>
              <FormControl>
                <FormLabel>URL</FormLabel>
                <Input
                  placeholder="http://gitflash.com"
                  value={pageUrl}
                  onChange={(e) => setPageUrl(e.currentTarget.value)}
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

export default AddPageModal;
