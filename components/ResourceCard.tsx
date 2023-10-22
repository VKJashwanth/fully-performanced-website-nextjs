interface Props {
    id: string;
    title: string;
    image: string;
    downLoadNumber: number;
    slug: string;
}

export default function ResourceCard({id, title, image, downLoadNumber, slug}: Props) {
    return (
        <div>
            ResourceCard
        </div>
    )
}