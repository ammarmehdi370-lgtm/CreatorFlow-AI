export type UploadIntent = {
  assetId: string;
  storageKey: string;
  uploadUrl: string;
  expiresAt: Date;
};

export interface ObjectStorage {
  createUploadIntent(input: { storageKey: string; mimeType: string; sizeBytes: number }): Promise<UploadIntent>;
  createDownloadUrl(input: { storageKey: string; expiresInSeconds: number }): Promise<string>;
  deleteObject(storageKey: string): Promise<void>;
  objectExists(storageKey: string): Promise<boolean>;
}
