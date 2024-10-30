export type File = {
  id?: string;
  name: string;
  originalname: string;
  mimetype: string;
  path: string;
  size: string;
};

export let data: File[] = [];

export const updateData = (data: File[]) => {
  data = data;
};
