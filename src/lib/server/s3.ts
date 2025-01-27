import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { PRIVATE_AWS_ACCESS_KEY_ID, PRIVATE_AWS_SECRET_ACCESS_KEY, PRIVATE_AWS_REGION } from '$env/static/private';

export const s3Client = new S3Client({
    region: PRIVATE_AWS_REGION,
    credentials: {
        accessKeyId: PRIVATE_AWS_ACCESS_KEY_ID,
        secretAccessKey: PRIVATE_AWS_SECRET_ACCESS_KEY
    }
});

export async function getPDFBuffer(key: string) {
    const command = new GetObjectCommand({
        Bucket: "csds-marketing-assets",
        Key: key
    });

    const response = await s3Client.send(command);
    const chunks: Uint8Array[] = [];
    const stream = response.Body?.transformToWebStream();
    const reader = stream?.getReader();
    if (!reader) throw new Error('Failed to get stream reader');

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }

    // Combine all chunks into a single Uint8Array
    const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
    }

    return result;
} 