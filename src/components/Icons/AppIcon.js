import * as React from "react"

const AppIcon = (props) => (
    <svg
        viewBox="0 0 58 58"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M28.598 57.703c15.794 0 28.598-12.918 28.598-28.852C57.196 12.917 44.393 0 28.598 0 12.804 0 0 12.917 0 28.851s12.804 28.852 28.598 28.852Z" />
        <path
            d="M40.917 16.423c2.639 0 4.777-2.158 4.777-4.82 0-2.66-2.138-4.818-4.777-4.818-2.638 0-4.776 2.157-4.776 4.819 0 2.661 2.138 4.819 4.776 4.819Z"
            fill="#020203"
        />
        <mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={58}
            height={58}
        >
            <path
                d="M28.598 57.703c15.794 0 28.598-12.918 28.598-28.852C57.196 12.917 44.393 0 28.598 0 12.804 0 0 12.917 0 28.851s12.804 28.852 28.598 28.852Z"
                fill="#FF0101"
            />
        </mask>
        <g mask="url(#a)">
            <path
                d="M39.535 29.422c.314.507.88.824 1.508.824.314 0 .629-.063.943-.253l8.61-5.2c.88-.507 1.132-1.648.63-2.473a1.763 1.763 0 0 0-2.452-.634l-7.165 4.312-3.457-6.785a31.658 31.658 0 0 0-3.08-2.727l-10.245-5.2c-.691-.316-1.446-.253-2.011.255l-8.548 7.799c-.755.697-.817 1.839-.126 2.536.691.761 1.823.825 2.514.127l7.731-6.975 5.343 2.727-9.177 14.33L-.377 57.07c-.817.95-.754 2.472.251 3.297.943.824 2.452.76 3.269-.254l20.301-23.651 8.737 2.029-5.971 9.448c-.629 1.141-.252 2.536.88 3.17a2.281 2.281 0 0 0 3.017-.697l7.668-12.239c.44-.634.503-1.458.251-2.155-.314-.698-.88-1.205-1.634-1.332L29.667 33.1l6.096-9.639 3.772 5.961Z"
                fill="#020203"
            />
        </g>
    </svg>
)

export default AppIcon